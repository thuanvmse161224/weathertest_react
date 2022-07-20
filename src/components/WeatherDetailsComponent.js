import React, { Component } from "react";

const API_KEY = "02aa93d97bf3338ee688e4d7b6f25fab";

class WeatherDetails extends Component {
    constructor(props) {
        //super(props);
    }

    render() {
        return(
            <>
                <p>Current Weather has been get at</p>
                <p>City: </p>
                <p>Temparature: </p>
                <p>Real feel: </p>
                <p>Humidity:%</p>
            </>
        );
    }
}

export default WeatherDetails;

/*
add input if want to add into db
*/