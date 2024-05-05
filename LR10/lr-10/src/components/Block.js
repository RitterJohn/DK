import React from "react";

function Block(props) {
    return (
        <div className="blocks">
            <img className="sm_pic" src={props.img} alt="pic" />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default Block;