import React, { useState, useEffect } from "react";
import InfoWrapper from "./InfoWrapper";
import PlayerList from "./PlayerList";

export default function LancerBreakdown(props) {

    const [players, setPlayers] = useState([]);
    const [curSelected, setCurSelected] = useState({});

    useEffect(() => {
        fetch("data/data.json")
            .then((response) => response.json())
            .then((data) => {
                //TODO - set data into property
                setPlayers(data);
                console.log("Loading Data");       
            });
    },[]);

    console.log(players);

    return (
        <div>
            <svg height="600px" width="850px">
                <InfoWrapper curPlayer={curSelected}/>
                <PlayerList 
                players={players} 
                curSelected={curSelected} 
                onPlayerSelected={(id) => {playerSelected(id);}} 
                />
                
            </svg>
        </div >);

        function playerSelected(id)
        {
            const playerFound = players.find(player => player.id ===id);
            console.log(playerFound);
            setCurSelected(playerFound);
        }
}