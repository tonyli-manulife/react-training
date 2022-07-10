import React from "react";
import './index.css';

export default function Button({onClick,children}){
    return (
        <button className="demo-button" onClick={onClick}>{children}</button>
    )
}