import React, { Component } from "react";
import Form from "./Form";
import Titles from "./Titles";
import Weather from "./WeatherComponent";

const API_KEY = "02aa93d97bf3338ee688e4d7b6f25fab";

class Main extends Component {
    constructor(props) {
        super(props);
    }
    state = {
    weather:undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const Geo_api_call = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${API_KEY}`);
        const geoData = await Geo_api_call.json();
        if (city && country) {            
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${API_KEY}&units=metric`);
            const weatherData = await api_call.json();
            console.log("HI");
            console.log(weatherData.name);
            this.setState ({
                weather: weatherData
            });
        }
    }
    //presentational
    render() {
        return (
            <div>
                <Titles />
                <Form getWeather = {this.getWeather}/>
                <Weather weather = {this.state.weather}/>
            </div>
        )
    }
}

export default Main;