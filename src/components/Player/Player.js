import { faEuroSign, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Player.css';

const Player = (props) => {
    const { name, photo, nationalTeam, position, jerseyNumber, currentTransferRecord } = props.player;
    const addPlayer = props.addPlayer;
    return (
        <div className="col-xl-4 my-3  col-sm-6">
            <div className="card" >
                <div className="img-container">
                    <img src={photo} className="card-img-top card-img" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Position : {position}</p>
                    <p>Jersey Number : {jerseyNumber}</p>
                    <p>Due : <FontAwesomeIcon icon={faEuroSign}/> {currentTransferRecord} Million.</p>
                    <p>National Team : {nationalTeam}</p>
                    <button onClick={() => addPlayer(props.player)} className="btn btn-primary text-capitalize"> <FontAwesomeIcon icon={faPlusSquare}/>  add to your team</button>
                </div>
            </div>
        </div>
    );
};

export default Player;