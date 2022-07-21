import React, { Component } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "02aa93d97bf3338ee688e4d7b6f25fab";

function TimeUnix({time}) {
    let unix_timestamp  = time;

    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    console.log(formattedTime);
    //console.log("time" + unix_timestamp);
    return formattedTime;
}
class WeatherDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: undefined
        }
    }

    getWeather = async () => {
        console.log("get weather invoked");
        const name = this.props.match.params.name;
        const country = this.props.match.params.country;
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
        //const name = this.props.match.params.name;
        //const country = this.props.match.params.country;

        const a = () => {this.getWeather()};

        console.log("Bae");
        console.log(this.props);
        console.log("Cr4");

        if (typeof this.props.weather === "undefined") {
            return (
                <div>
                    <p>You haven't inputted or the data was not found in the API</p>
                </div>
            );
        }
        if (this.props.weather.name != null) {
            return(
                <div>
                    <p>Current Weather has been get at <TimeUnix time={this.props.weather.dt}/></p>
                    <p>City: {this.props.weather.name}</p>
                    <p>Temparature: {this.props.weather.main.temp}</p>
                    <p>Real feel: {this.props.weather.main.feels_like}</p>
                    <p>Humidity: {this.props.weather.main.humidity} %</p>
                </div>
            );
        };
        
    }
}

export default WeatherDetails;