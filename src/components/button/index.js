import React from "react";

export const Button = (props) => {
    return <button id={props.id} onClick={props.onClick}>{props.btnName} </button>
}