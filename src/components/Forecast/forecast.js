import React, { useEffect, useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    const uriEncodedCity = encodeURIComponent(city);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps

    function getForecast(e) {
        // weather data fetch function will go here
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': 'fb978a9957msh0b56e3055da8ae7p111c46jsnfa747495b5bc'
                // 'X-API-Key': 'SThAc9Dfpb3OJ47mVg3RP3Q9qJfAOE9F5TvwZcMs',
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            }
        };

        let url = `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`;
        // let url = `https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm`;
        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setResponseObj(response)
            })

        e.preventDefault();
        
    }

    function changeColors() {
        var main;
        if (responseObj.weather[0].main === "Clouds") {
            main = "Clouds"
            let appHeaders = document.getElementsByClassName("App-header")
            for (let i = 0; i < appHeaders.length; i++) {
                appHeaders[i].style.backgroundColor="#163294";
            }
    
            let appFooters = document.getElementsByTagName("footer")
            for (let i = 0; i < appFooters.length; i++) {
                appFooters[i].style.backgroundColor = "#411F97";
                appFooters[i].style.color="white";
            }
    
            console.log("Yolo")
        }
    }

    // useEffect(()=>{
    //     getForecast()
    // })

    return (
        // JSX code will go here
        <div>
            <h2>Your local Weather</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>
            <Conditions 
                responseObj={responseObj}
            />
        </div>
    )
}

export default Forecast;