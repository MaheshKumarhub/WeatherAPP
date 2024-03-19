import React, { useState } from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

const Weather = () => {
    const [weatherData, setWeatherData] = useState({
        humidity: "64%",
        windRate: "18 km/hr",
        temperature: "24°C",
        location: "London"
    });

    let api_key = "a51e22209ed8f09e992753ddd3917031";

    const [icon,setIcon] = useState(cloud_icon);

    const search = async () => {
        const cityInput = document.getElementsByClassName("cityInput")[0];
        if (cityInput.value === "") {
            return;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        setWeatherData({
            humidity: `${data.main.humidity}%`,
            windRate: `${data.wind.speed} km/hr`,
            temperature: `${data.main.temp}°C`,
            location: data.name
        });

        if(data.weather[0].icon==="01d" || data.weather[0].icon=== "01n")
        {
            setIcon(clear_icon)

        } else if (data.weather[0].icon==="02d" || data.weather[0].icon=== "02n")
        {
            setIcon(cloud_icon)

        } else if (data.weather[0].icon==="03d" || data.weather[0].icon=== "03n")
        {
            setIcon(drizzle_icon)

        } else if (data.weather[0].icon==="04d" || data.weather[0].icon=== "04n")
        {
            setIcon(drizzle_icon)

        } else if (data.weather[0].icon==="09d" || data.weather[0].icon=== "09n")
        {
            setIcon(rain_icon)

        } else if (data.weather[0].icon==="10d" || data.weather[0].icon=== "10n")
        {
            setIcon(rain_icon)

        } else if (data.weather[0].icon==="13d" || data.weather[0].icon=== "13n")
        {
            setIcon(snow_icon)

        } else {
            setIcon(clear_icon)
        }
    };

    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="search" />
                <div className="search-icon" onClick={search}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={icon} alt="" />
            </div>
            <div className="weather-temp">{weatherData.temperature}</div>
            <div className="weather-location">{weatherData.location}</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">{weatherData.humidity}</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">{weatherData.windRate}</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;

