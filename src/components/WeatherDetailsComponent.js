import React, { Component } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "02aa93d97bf3338ee688e4d7b6f25fab";
const {name, country} = useParams();
class WeatherDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: undefined
        }
    }

    getWeather = async () => {
        const Geo_api_call = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name},${country}&limit=1&appid=${API_KEY}`);
        const geoData = await Geo_api_call.json();
        if (typeof geoData[0] !== "undefined") {  
            if (geoData[0].name != null) {
                const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${API_KEY}&units=metric`);
                const weatherData = await api_call.json();
                this.setState ({
                    weather: weatherData
                });
            }
        };
    }
    
    render() {
        this.getWeather;
        if (typeof this.state.weather === "undefined") {
            return (
                <div>
                    <p>You haven't inputted or the data was not found in the API</p>
                </div>
            );
        }
        if (weather.name != null) {
            return(
                <div>
                    <p>Current Weather has been get at</p>
                    <p>City: {this.state.weather.name}</p>
                    <p>Temparature: {this.state.weather.main.temp}</p>
                    <p>Real feel: {this.state.weather.main.feels_like}</p>
                    <p>Humidity: {this.state.weather.main.humidity} %</p>
                </div>
            );
        };
    }
}

export default WeatherDetails;

/*
add input if want to add into db
*/