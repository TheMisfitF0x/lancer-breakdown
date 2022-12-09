import React, { useState, useEffect } from "react";
import InfoWrapper from "./InfoWrapper";
import PlayerList from "./PlayerList";

export default function LancerBreakdown(props) {

    const [players, setPlayers] = useState([]);
    const [curSelected, setCurSelected] = useState(0);

    useEffect(() => {
        fetch("data/data.json")
            .then((response) => response.json())
            .then((data) => {
                //TODO - set data into property
                setPlayers(data);       
            });
    }, []);
    console.log(players[curSelected]);
    return (
        <div>
            <svg height="600px" width="850px">
                <PlayerList players={players} curSelected={curSelected} onPlayerSelected={setCurSelected} />
                <InfoWrapper curPlayer={players[curSelected]} />
            </svg>
        </div >);
}