import React from "react";
//import { Row, Col } from 'reactstrap';
//import Form2 from "./Form";
import { Link } from 'react-router-dom';

//data compo, but also presentation compo
const Table = ({ citys, postCity, updateCity, deleteCity }) => {
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
                        <Link to={`/Weather/${city.name}/${city.country}`}>Watch the Weather</Link>
					</div>
				</div>
				<div className={`hide-form show-form-${city.id}`}>
                    {
					//<Form2 cityData={city} postCity={postCity} updateCity={updateCity} />
                    }
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