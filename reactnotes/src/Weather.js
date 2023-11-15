import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';

function Weather() {
    const APIKey = "";

    const [input, setInput] = useState('');

    const [temp, setTemp] = useState('');
    const [weatherText, setWeatherText] = useState('');


    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleButtonClick = (event) => {
        console.log(input);

        //Api handling
        axios.get("https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + APIKey)
            .then(response => {
                Test(response.data);
            })
            .catch(error => console.error(error))
    };

    const Test = (data) => {
        console.log(data);
        console.log(data.list[0].main.temp - 273.15);
        console.log(data.list[0].weather[0].main);
        setTemp((data.list[0].main.temp - 273.15).toFixed(2) + '°C');
        setWeatherText(data.list[0].weather[0].main);
    };

    return (
        <>
            <div className='WeatherDiv'>
                <input type="text" onChange={handleInputChange} />

                <button onClick={handleButtonClick}>Select</button>

                <div className='InfoPanel'>
                    <p className='InfoText'>{temp}</p>
                    <p className='InfoText'>{weatherText}</p>
                </div>
            </div>
        </>

    );

}
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

export default Weather;