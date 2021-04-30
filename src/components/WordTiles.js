import React, { useState, useEffect } from 'react';
import { Tile } from './Tile';



export function WordTiles(props){
    let wordString = props.wordString;

    function removeFirst(arr, el){
        const i = arr.indexOf(el);
        if (i === -1) return [arr, false];
        return [[...arr.slice(0,i), ...arr.slice(i+1)],true];
    }
    function renderTile(c, index, selected){
            return (<Tile isSelected={selected} key={index} char={c}/>);
    }
    function renderTiles(str){
        let removedLetters = props.typedWord.split("");
        let removed = false;
        let out = [];
        for(let i = 0; i < str.length; i++){
            [removedLetters, removed] = removeFirst(removedLetters, str[i]);
            out.push(renderTile(str[i], i, removed));
        }
        return out;
    }
    return(
        <div className="WordTiles">
            { renderTiles(wordString) }
        </div>
    );
}
