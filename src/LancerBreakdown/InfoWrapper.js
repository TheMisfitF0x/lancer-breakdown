import React from "react";
import PilotDetails from "./Pilot/PilotDetails";
import PlayerDetails from "./Player/PlayerDetails";

export default function InfoWrapper(props) {
console.log(props.curPlayer);

    return (
        <g>
            <rect x="100px" y="50px" height="500px" width="700px" fill="lightgrey" stroke="black" />
            <PlayerDetails curPlayer = {props.curPlayer}/>
            <PilotDetails curPlayer = {props.curPlayer}/>         

        </g>
    );
}