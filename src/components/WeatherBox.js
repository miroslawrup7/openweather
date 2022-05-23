import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/WeatherBox.css";

const WeatherBox = (props) => {
    const [cityName, setCityName] = useState(null);
    const [cityId, setCityId] = useState(null);
    const [temp, setTemp] = useState(null);
    const [weather, setWeather] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [pressure, setPressure] = useState(null);
    const [icon, setIcon] = useState(null);
    const [refreshTime, setRefreshTime] = useState(null);

    const getData = () => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&APPID=6a5bbc9fd6c0ad49870cf3ee208ef6f1`
            )
            .then((res) => {
                setCityName(res.data.name);
                setCityId(`https://openweathermap.org/city/${res.data.id}`);
                setTemp(res.data.main.temp.toFixed(1));
                setWeather(res.data.weather[0].description);
                setHumidity(res.data.main.humidity);
                setPressure(res.data.main.pressure);
                setIcon(
                    `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
                );
                setRefreshTime(new Date().toLocaleString());
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getData();
    });

    useEffect(() => {
        let refreshData = setInterval(() => {
            getData();
        }, 10000);

        return () => {
            clearInterval(refreshData);
        };
    });

    return (
        <a href={cityId} target="_blanc">
            <div className="weather-box">
                <div className="city">{cityName}</div>
                <div className="weather-data">
                    <p>Temperature: </p>
                    {temp}&#8451;
                </div>
                <div className="weather-data">
                    <p>Humidity: </p>
                    {humidity}%
                </div>
                <div className="weather-data">
                    <p>Pressure: </p>
                    {pressure} hPa
                </div>
                <div className="weather-data">
                    <p>Weather: </p>
                    {weather}
                </div>
                <div className="weather-data">
                    <img src={icon} alt="weather-icon" />
                </div>
                <p>Last update: {refreshTime}</p>
            </div>
        </a>
    );
};

export default WeatherBox;
