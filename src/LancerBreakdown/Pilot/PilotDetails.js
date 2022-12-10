import React from "react";

export default function PilotDetails(props) {
    console.log(props.curPlayer.Pilot);

    return (
        <g className="DetailsPanel" >
            <text x = "150px" y = "250px" width = "70px">Pilot: {props.curPlayer.Pilot.name}</text>
            <text x = "150px" y = "300px" width = "70px">{props.curPlayer.Pilot.background}</text>
        </g>  );
}