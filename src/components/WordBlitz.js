import React, { useState, useHooks, useEffect } from 'react';
import { Timer } from './Timer';
import { WordTiles } from './WordTiles';
import { WordInput } from './WordInput';
import { getScore } from './LetterScore';
import { FoundWords } from './FoundWords';
import { SmartWordGenerator } from './SmartWordGenerator';

export function WordBlitz(){
    const [typedWord, setTypedWord] = useState("");
    const [genLetters, setGenLetters] = useState([]);
    const [score, setScore] = useState(0);
    const [usedWords, setUsedWords] = useState({});
    const [timerDone, setTimerDone] = useState(false);
    const [wordString, setWordString] = useState(SmartWordGenerator());
    const [seeInstructions, setSeeInstructions] = useState(true);

    var wordList = require('word-list-json');

    function handleTypedWord(word){
        setTypedWord(word);
    }
    function handleGenLetters(letters){
        setGenLetters(letters);
    }
    function calculateScore(word){
        let charArr = word.split("");
        let tempScore = 0;
        for(let c of charArr){
            tempScore = tempScore + getScore(c);
        }
        setUsedWords({ ...usedWords, [word]:tempScore});
        setScore((prev) => prev + tempScore);
    }
    function handleWordSubmit(word){
        //check if it's in the dictionary
        let lowWord = word.toLowerCase();
        let startIndex = wordList.lengths[word.length-1];
        let endIndex = wordList.lengths[word.length];

        if (word.length === 2){
            startIndex = 0;
        }
        for(let i = startIndex; i < endIndex; i++){
            if(lowWord === wordList[i]){
                if(Object.keys(usedWords).indexOf(word) === -1){
                    calculateScore(word);
                }
                return true;
            }
        }
        return false;
    }
    function handleTimerDone(isDone){
        setTimerDone(isDone);
    }
    function resetGame(){
        console.log("Reset");
    }

    const [time, setTime] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(time > 0){
                setTime((prev) => prev - 1);
            }
            if(time === 0){
                clearInterval(intervalId);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [time]);


    function resetGame(){
        setSeeInstructions(false);
        setTime(30);
        setWordString(SmartWordGenerator());
        setScore(0);
        setUsedWords([]);
        setTypedWord("");
    }
    return(
        <div className="WordBlitz">
            <Timer time={time}/>
            <WordTiles typedWord={typedWord.toUpperCase()} wordString={wordString}/>
            {time===0 ?
                <button className="StartButton" onClick={resetGame}>START</button> :
                <WordInput handleTypedWord={handleTypedWord} letters={wordString} handleWordSubmit={handleWordSubmit}/>
                }

            <div className="PlayerScore">
                Score: {score}
            </div>
            <FoundWords usedWords={usedWords} />
                {
                    seeInstructions ?
                    <div className="Instructions">
                        <h1>How To Play: </h1>
                            <ol>
                                <li>Press START</li>
                                <li>Enter as many words as possible using the letters given.</li>
                                <li>Score is calculated from letters used.</li>
                            </ol>
                    </div>
                    : ""
                }

        </div>

    );
}
