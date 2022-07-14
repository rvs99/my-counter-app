import React from "react";

export default function Button(props) {
    let { action, title, style } = props;
    return <button onClick={action} style={style}> {title} </button>;
}