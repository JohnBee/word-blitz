import React, { useState, useEffect } from 'react';


export function WordInput(props){
    const [word, setWord] = useState("");
    const [validWord, setValidWord] = useState(true);

    function removeFirst(arr, el){
        const i = arr.indexOf(el);
        if (i === -1) return [arr,false];
        return [[...arr.slice(0,i), ...arr.slice(i+1)],true];
    }
    function isValidWord(){
        let wordArr = word.split("");
        for(let c of wordArr){
            if(props.letters.indexOf(c) === -1){
                return false; // Letter not in generated letters
            }
        }
        // try and remove each typed letter from the gen string if possible
        let [left, removed] = [props.letters, false];
        for(let c of wordArr){
            [left, removed] = removeFirst(left, c);
            if(!removed){
                return false;
            }
        }
        return true;
    }
    useEffect(() => {
        setValidWord(isValidWord());
    }, [word]);

    function handleOnChange(e){
        const value = e.target.value.toUpperCase();
        setWord(value);
        props.handleTypedWord(value);
    }
    function handleKeyDown(e){
        if(e.key === 'Enter' && word.length > 0 && isValidWord()){
            props.handleWordSubmit(word);

            setWord("");
        }
    }
    return(
        <input type="text" className={validWord ? "WordInput" : "WordInput Invalid"} onKeyDown={handleKeyDown} onChange={handleOnChange} value={word}/>
    );
}
