import React, { useEffect, useState } from "react";
import WeatherBox from "../components/WeatherBox";
import "../styles/Main.css";

const Main = () => {
    const [city1, setCity1] = useState("Lodz");
    const [city2, setCity2] = useState("Warsaw");
    const [city3, setCity3] = useState("Berlin");
    const [refreshCitiesTime, setRefreshCitiesTime] = useState(null);

    const randomize = () => {
        let cities = ["Lodz", "Warsaw", "Berlin", "New York", "London"];

        let i = Math.floor(Math.random() * (cities.length - 1 - 0 + 1)) + 0;
        setCity1(cities[i]);
        cities.splice(i, 1);

        i = Math.floor(Math.random() * (cities.length - 2 - 0 + 1)) + 0;
        setCity2(cities[i]);
        cities.splice(i, 1);

        i = Math.floor(Math.random() * (cities.length - 3 - 0 + 1)) + 0;
        setCity3(cities[i]);
        cities.splice(i, 1);

        setRefreshCitiesTime(new Date().toLocaleString());
    };

    useEffect(() => {
        randomize();
    }, []);

    useEffect(() => {
        let refreshWeather = setInterval(() => {
            randomize();
        }, 60000);

        return () => {
            clearInterval(refreshWeather);
        };
    }, [city1, city2, city3]);

    return (
        <>
            <div className="main">
                {<WeatherBox city={city1} />}
                {<WeatherBox city={city2} />}
                {<WeatherBox city={city3} />}
                <p className="refresh-cities-time">
                    Time of randomizing the cities: {refreshCitiesTime}
                </p>
            </div>
        </>
    );
};

export default Main;
