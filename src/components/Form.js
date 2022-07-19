import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<label for="city">City: </label>
		<input type="text" id="city" name="city" placeholder="City..."/> <br/>
		<label for="city">Country 2 character code: </label>
		<input type="text" id="country" name="country" placeholder="US, UK, FR, ..."/> <br />
		<input type="submit" value="Get Weather"/>
	</form>
);

export default Form;