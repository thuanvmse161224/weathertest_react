import React from "react";
import { Table } from 'reactstrap';
//import Form2 from "./Form";
import { Link } from 'react-router-dom';

//data compo, but also presentation compo
const Menu = ({ cities, postCity, updateCity, deleteCity }) => {
	const showUpdateCity = id => {
		const form = document.getElementsByClassName(`show-form-${id}`)
		form[0].classList.toggle("hide-form")
	}

	const Row = ({ city }) => {
		return (
			<>
				<tr>
					<td>{city.name}</td>
					<td>{city.country}</td>
					<td className='buttons'>
						<button onClick={() => showUpdateCity(city.id)}>Update</button>
						<button onClick={() => deleteCity(city.id)}>Delete</button>
                        <a href='#${city.id}'>Watch Weather</a>
					</td>
				</tr>
                

			</>
		)
	}

	return (
		<Table striped bordered>
			<thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Actions</th>
                </tr>
			</thead>
			<tbody>
				{cities && cities.map(city => <Row city={city} key={city.id} />)}
			</tbody>
		</Table>
	)
}

export default Menu;