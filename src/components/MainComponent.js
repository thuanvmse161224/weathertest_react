import React, { Component } from "react";
import Form from "./Form";
import Titles from "./Titles";
import Weather from "./WeatherComponent";

import { httpHelper } from "../helpers/httpHelper";

const API_KEY = "02aa93d97bf3338ee688e4d7b6f25fab";

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            weather:undefined
        }
    } 

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const Geo_api_call = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${API_KEY}`);
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
    //container compo
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

/*
        const DishWithId = ({match}) => {
            return (
                <DishDetail 
                    dish = {this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
                />
            )
        };
        //with id should somehow call the search weather
        //but even when no add can still search
        //=> no id, id is kinda useless in this
        return (
            <div>
                <Routes>
                    <Route path='/Home' component={HomePage} />
                    <Route exact path='/Menu' 
                        component={() => 
                            <Table 	
                                users={users}
                                setUsers={setUsers}
                                postUser={postUser}
                                updateUser={updateUser}
                                deleteUser={deleteUser}
                            /> 
                        } 
                    />
                    <Route path='/Menu/:dishId' component={Weather something () => <Weather city= country=/>} />
                    <Route path='/Weather' component={search and show} />
                    <Redirect to="/Home"/>
                </Routes>
            </div>
        )
*/