import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" />
                    </div>
                    <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
        <h1>London</h1>
        <ul>
            <li>Thursday 20:00</li>
            <li>Partly cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Partly Cloudy" />
                6°C
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 80%</li>
                    <li>Humidity: 73%</li>
                    <li>Wind: 15km/h</li>
                </ul>
            </div>
        </div>
        </div>
    )
}