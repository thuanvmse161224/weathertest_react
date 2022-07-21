import React, { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetailsComponent";
import Weather from "./WeatherComponent";
import { Route, Switch, Redirect } from "react-router-dom";
import { httpHelper } from "../helpers/httpHelper";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";

const Main = () =>  {
    //container compo
    //REST API
    const [cities, setCities] = useState(null)

    const url = "http://localhost:5000/cities"
    const api = httpHelper()

    useEffect(() => {
        getCities()
    }, [])

    const postCity = city => {
        api
            .post(`${url}`, { body: city })
            .then(res => getCities())
            .catch(err => console.log(err))
    }

    const updateCity = (id, city) => {
        api
            .put(`${url}/${id}`, { body: city })
            .then(res => getCities())
            .catch(err => console.log(err))
    }

    const deleteCity = id => {
        api
            .del(`${url}/${id}`, {})
            .then(res => getCities())
            .catch(err => console.log(err))
    }

    const getCities = () => {
        api
            .get(`${url}`)
            .then(res => {
                setCities(res)
            })
            .catch(err => console.log(err))
    }

    if (!cities) return null

    //END REST API

    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/Menu' 
                    component={() => 
                        <Menu 	
                            cities={cities}
                            setCities={setCities}
                            postCity={postCity}
                            updateCity={updateCity}
                            deleteCity={deleteCity}
                        /> 
                    } 
                />
                <Route exact path='/Weather' component={WeatherDetails} />
                <Route exact path='/Weather/:name/:country' component={Weather}/>
                <Redirect to="/Menu" />
            </Switch>

        </>
    )
    
}

export default Main;