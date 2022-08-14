import React from "react";

export const Input = (props) => {
    return <div>
        <input id={props.id} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type={props.type} />
    </div>
}