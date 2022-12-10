import React from "react";
import PilotDetails from "../Pilot/PilotDetails";

export default function PlayerDetails(props) {
    console.log(props.curPlayer);
    return (
        <g className="playerDetails">
            <text x = "150px" y = "100px">Player: {props.curPlayer.name}</text>
            <text x = "150px" y = "150px">{props.curPlayer.desc}</text>
                   
        </g>  );
}