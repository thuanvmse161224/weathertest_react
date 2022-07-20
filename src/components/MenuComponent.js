import React from "react";
import {Form, Form2} from "./Form";

//data compo, but also presentation compo
const Menu = ({ citys, postCity, updateCity, deleteCity }) => {
	const showUpdateCity = id => {
		const form = document.getElementsByClassName(`show-form-${id}`)
		form[0].classList.toggle("hide-form")
	}

	const Row = ({ city }) => {
		return (
			<>
				<div className='row'>
					<div>{city.name}</div>
					<div>{city.country}</div>
					<div className='buttons'>
						<button onClick={() => showUpdateCity(city.id)}>Update</button>
						<button onClick={() => deleteCity(city.id)}>Delete</button>
					</div>
				</div>
				<div className={`hide-form show-form-${city.id}`}>
					<Form2 cityData={city} postCity={postCity} updateCity={updateCity} />
				</div>
			</>
		)
	}

	return (
		<div className='table'>
			<div className='titles'>
				<div>Name</div>
				<div>Country</div>
				<div>Actions</div>
			</div>
			<div className='rows'>
				{citys && citys.map(city => <Row city={city} key={city.id} />)}
			</div>
		</div>
	)
}

export default Table;