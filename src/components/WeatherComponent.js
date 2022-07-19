import React from "react";

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const weather = this.props.weather;
        if (typeof weather === "undefined") {
            return (
                <div>
                    <p>
                        Inputted data is not valid or not found. <br />
                        Please try again
                    </p>
                </div>
            )
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
