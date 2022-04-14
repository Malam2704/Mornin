import React, { useEffect, useState } from 'react';
import classes from './Train.module.css';

const Train = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');

    function getTrains(e) {
        // train data will go here
        const options = {
            method: 'GET',
            headers: {
                'X-API-Key': 'SThAc9Dfpb3OJ47mVg3RP3Q9qJfAOE9F5TvwZcMs',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        let url = `https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm`;
        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setResponseObj(response)
            })
        e.preventDefault(); 
    }


    return (
        // JSX code will go here
        <div>
                <button onClick={getTrains}>Get Trains</button>
        </div>
    )
}

export default Train;