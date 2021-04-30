import React from 'react';
import { getScore } from "./LetterScore";

export function Tile(props){
    return(
        <div className={props.isSelected ? "Tile Selected" : "Tile"}>
            <div className="Score">
                {getScore(props.char)}
            </div>
            {props.char}
        </div>
    )
}
