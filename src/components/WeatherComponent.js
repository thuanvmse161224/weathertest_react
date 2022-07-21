import React, { Component } from "react";
import WeatherDetails from "./WeatherDetailsComponent";

const API_KEY = "02aa93d97bf3338ee688e4d7b6f25fab";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: undefined
        }
    }

    getWeather = async () => {
        const name = this.props.match.params.name;
        const country = this.props.match.params.country;
        const Geo_api_call = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${name},${country}&limit=1&appid=${API_KEY}`);
        const geoData = await Geo_api_call.json();
        if (typeof geoData[0] !== "undefined") {  
            if (geoData[0].name != null) {
                const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${API_KEY}&units=metric`);
                const weatherData = await api_call.json();
                this.setState ({
                    weather: weatherData
                });
            }
        };
    }
    
    render() {
        return(
            <div>
                <button onClick={() => this.getWeather()}>Click here to show the data</button>
                <WeatherDetails weather={this.state.weather} />
            </div>
        )
    }
}

export default Weather;