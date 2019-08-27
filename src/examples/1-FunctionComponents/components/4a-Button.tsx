import React from "react";

interface IButtonProps {
    id: string;
    style?: React.CSSProperties;
    className?: string;
}

export const Button: React.FC<IButtonProps> = props => (
    <button id={props.id} style={props.style} className={props.className}>
        {props.children}
    </button>
);
