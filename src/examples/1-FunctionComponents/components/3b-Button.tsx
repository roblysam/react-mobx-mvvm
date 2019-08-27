import React from "react";

export const Button = props => (
    <button id={props.id}>
        <span>Text: </span>
        {props.text}
    </button>
);
