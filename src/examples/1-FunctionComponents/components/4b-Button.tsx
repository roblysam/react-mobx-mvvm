import React from "react";

interface IButtonProps {
    id: string;
    style?: React.CSSProperties;
    className?: string;
}

export const Button: React.FC<IButtonProps> = ({
    id,
    style,
    className,
    children
}) => (
    <button id={id} style={style} className={className}>
        {children}
    </button>
);
