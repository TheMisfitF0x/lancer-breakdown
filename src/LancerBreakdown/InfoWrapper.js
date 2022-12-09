import React from "react";
import PlayerDetails from "./Player/PlayerDetails";


export default function InfoWrapper(props) {

    return (
        <g>
            <rect x="100px" y="50px" height="500px" width="700px" fill="lightgrey" stroke="black" />
            <PlayerDetails player = {props.curPlayer}/>
        </g>
    );
}