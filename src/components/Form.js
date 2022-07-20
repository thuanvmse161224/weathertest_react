import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<label for="city">City: </label>
		<input type="text" id="city" name="city" placeholder="City..."/> <br/>
		<label for="city">Country: </label>
		<input type="text" id="country" name="country" placeholder="Country code: US, UK, FR, DE, KR, ..."/> <br />
		<input type="submit" value="Get Weather"/>
	</form>
);

export default Form;

/*
import React, { useState } from "react"

const Form = ({ cityData = {}, postCity, updateCity }) => {
	const [city, setCity] = useState({
		name: cityData.name ?? "",
		country: cityData.country ?? "",
	})

	const handleValue = e => {
		setCity({ ...city, [e.target.name]: e.target.value })
	}

	const submitCity = e => {
		e.preventDefault()
		if (cityData.id) {
			updateCity(cityData.id, city)
		} else {
			postCity(city)
		}
	}

	return (
		<form onSubmit={submitCity} className='row'>
			<input
				type='text'
				name='name'
				value={cities.name}
				placeholder='Name'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='country'
				value={cities.country}
				placeholder='Country code: US, UK, FR, DE, KR, ...'
				onChange={e => handleValue(e)}
			/>
			<input
				className='btn-submit'
				type='submit'
				value={`${!cityData.id ? "Add new city" : "Save city"}`}
			/>
		</form>
	)
}

export default Form;

*/