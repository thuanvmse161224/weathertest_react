import React from "react";

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {        
        const weather = this.props.weather;
        if (typeof weather === "undefined") {
            return (
                <p>You haven't inputted or the data was not found in the API</p>
            );
        }
        if (weather.name != null) {
            return (
                <div>
                    <p>Current Weather</p>
                    <p>City: {this.props.weather.name}</p>
                    <p>Temparature: {this.props.weather.main.temp}</p>
                    <p>Real feel: {this.props.weather.main.feels_like}</p>
                    <p>Humidity: {this.props.weather.main.humidity} %</p>
                </div>
            )
        }       
    }
}


export default Weather;
