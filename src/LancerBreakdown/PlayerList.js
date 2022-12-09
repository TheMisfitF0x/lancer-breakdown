import React from "react";

export default function PlayerList(props) {

    let playerEls = props.players.map((player) => (
        <g key={player.id}
            onClick={(e) => {
                props.onPlayerSelected(player.id);
                console.log("Player Updated");
            }
            }>
            <rect
                x={props.curSelected === player.id ? 30 : 20}
                y={50 * player.id + 10}
                stroke="black"
                id="cardBox"
                height="50px"
                width="70px"
                fill="lightgrey"

            ></rect>
            <text x={props.curSelected === player.id ? 40 : 30} y={50 * player.id + 40}>
                {player.name}
            </text>
        </g>
    ));

    return (<g>{playerEls}</g>);
}