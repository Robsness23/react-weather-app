import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "1d9fb2d6f9899977e52e0b60c9d8f79b";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=mettric`

    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div className="WeatherForecast-temps"><span className="WeatherForecast-temps-max">19°</span> 
                    <span className="WeatherForecast-temps-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}