import React from "react";
import './Card.css';

const Card = (props) => {
    const { id, name, email } = props;
    return (
        <div className="tc bg-light-green dib pa3 ma2 grow bw2 br4 shadow-5">
            <img src={`https://robohash.org/${name}?200x200`} alt="_robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;