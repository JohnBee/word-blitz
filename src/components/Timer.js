import React, { useState, useEffect } from 'react';

export function Timer(props){
    return(
        <div className="Timer">
        Time: {props.time}s
        </div>
    );
}
