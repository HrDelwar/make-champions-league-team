import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Team.css';

const Team = (props) => {
    const selectedPlayers = props.selectedPlayers;
    const teamBudget = selectedPlayers.reduce((totalBudget, playerBudget) =>
        totalBudget + playerBudget.currentTransferRecord, 0);
    return (
        <div>
            <h2 className="text-center text-capitalize mb-4">{selectedPlayers.length ? selectedPlayers.length > 10 ? 'Your Team is awesome!' : 'make team complete' : 'Opps! your team has no player'}</h2>
            <div className="d-flex justify-content-between">
                <p>Total Players: {selectedPlayers.length}</p>
                <p>Team Budget: <FontAwesomeIcon icon={faEuroSign} /> {teamBudget.toFixed(2)} (million)</p>
            </div>
            {
                selectedPlayers.map((player) => {
                    const { name, photo, nationalTeam, position, currentTransferRecord, jerseyNumber } = player;
                    return <div className="team-player">
                        <div className="">
                            <h5>Name: {name}</h5>
                            <p>Position: {position}</p>
                            <p>Jersey Number: {jerseyNumber}</p>
                            <p>Current Transfer Due: <FontAwesomeIcon icon={faEuroSign}/> {currentTransferRecord} (million)</p>
                            <p>National Team: {nationalTeam}</p>
                        </div>
                        <div className="img-container">
                            <img src={photo} alt=""/>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Team;