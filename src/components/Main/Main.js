import React, { useEffect, useState } from 'react';
import './Main.css';
import playersData from '../../fakeData/players.json';
import Player from '../Player/Player';
import Team from '../Team/Team';
const Main = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    useEffect(() => setPlayers(playersData), []);

    const addPlayer = (player) => {
        const newSelectedPlayers = [...selectedPlayers, player];
        const removeDuplicatesPlyer =
            newSelectedPlayers.filter((player, index) => newSelectedPlayers.indexOf(player) === index);
        setSelectedPlayers(removeDuplicatesPlyer);
        selectedPlayers.forEach(ele =>{
            if(ele.id === player.id){
                alert(player.name + ' is already added to your team.');
            }
        })
        selectedPlayers.length === 10 && alert('Congratulation! You make a team completely.')
    }

    return (
        <div className=" container-fluid">
            <div className="row">
                <div className="col-lg-8">
                    <h2 className="text-center text-capitalize">Make a UEFA Champions league Team!</h2>
                    <div className="row">
                        {players.map(player => <Player
                            addPlayer={addPlayer}
                            key={player.id}
                            player={player}
                        />)}
                    </div>
                </div>
                <div className="col-lg-4">
                    <Team selectedPlayers={selectedPlayers} />
                </div>
            </div>
        </div>
    );
};

export default Main;