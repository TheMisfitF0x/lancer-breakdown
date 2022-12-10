import React from "react";



export default function InfoWrapper(props) {
let curPlayer = props.players[props.curSelected];

    return (
        <g>
            <rect x="100px" y="50px" height="500px" width="700px" fill="lightgrey" stroke="black" />
            <g className="playerDetails">
                <text x = "150px" y = "100px">Pilot: {curPlayer.name}</text>
                <text x = "150px" y = "150px">{curPlayer.desc}</text>
            </g>
        </g>
    );
}