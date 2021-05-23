import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: "Sunday 20:00",
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.name
            });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                        </div>
                        <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="d-flex">
                            <img src={weatherData.iconUrl} alt={weatherData.desciption} className="float-left" />
                            <div className="float-left">
                                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                                <span className="unit">°C</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind}km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
    const apiKey = "1d9fb2d6f9899977e52e0b60c9d8f79b";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    }
}