import React from 'react';


export function FoundWords(props) {
    function listify(wordsDict){
        let out = [];
        for(let k of Object.keys(props.usedWords)){
            out.push(<li key={k} className="FoundWord">{k} +{props.usedWords[k]}</li>);
        }
        //return Object.keys(props.usedWords).map((k) => {<li>{k}</li>});
        return out;
    }
    return(
        <div className={FoundWords}>
            <ul className="FoundWords list">
                {listify(props.usedWords)}
            </ul>
        </div>
    );
}
