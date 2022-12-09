import React from "react";

export default function PlayerDetails(props) {
    return (
    <g>
        <text x = "150px" y = "100px">{props.player.name}</text>
    </g>);
}