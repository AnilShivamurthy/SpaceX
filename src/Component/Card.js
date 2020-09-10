import React from 'react';
import './Card.css';

const Card=(props)=>{

    return(
        <div className="single-card">
            <div className="card">
                <div className="img-section"><img className="card-img" src={props.links.mission_patch}/></div>
                <div className="card-text spacing text-color">{props.mission_name}<span className="flight-number">#{props.flight_number}</span></div>
                <div className="card-text spacing">Mission Ids :<span className="flight-number">{props.mission_id}</span></div>
                <div className="card-text spacing">Launch Year :<span className="flight-number">{props.launch_year}</span></div>
                <div className="card-text spacing">Successful Launch :<span className="flight-number">{JSON.stringify(props.launch_success)}</span></div>
                <div className="card-text spacing">Successful Landings :<span className="flight-number">{JSON.stringify(props.rocket.first_stage.cores[0].land_success)}</span></div>
            </div>
        </div>
    )

}

export default Card;