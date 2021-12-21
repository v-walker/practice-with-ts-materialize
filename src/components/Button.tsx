import React from 'react';

interface ButtonProps {
    color?: string;
    text: string;
    action: () => void;
}

function Button({text, action, color}: ButtonProps) {
    return (
        <button className={`waves-effect waves-light btn ${color}`} onClick={action}>{text}</button>
    )
}

export default Button;
