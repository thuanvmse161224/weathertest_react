import React from "react";

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("wet ");
        console.log(this.props.weather);
        return (
            <div>
                <p>Weather haha</p>
                <p>City: {this.props.weather.name}</p>
                <p>Temp: {this.props.weather.main.temp}</p>
                <p>feels_like: {this.props.weather.main.feels_like}</p>
                <p>humidity: {this.props.weather.main.humidity}</p>
            </div>
        )
    }
}


export default Weather;
