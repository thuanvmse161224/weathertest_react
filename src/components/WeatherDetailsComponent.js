import React, { Component } from "react";

function TimeUnix({time}) {
    let unix_timestamp  = time;

    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}
class WeatherDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: undefined
        }
    }

    render() {
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