import { useState } from "react";

function Form() {
	const [name, setName] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();
		alert(`The name you entered is: ${name}`);
	};

	return (
		<>
			<form onSubmit={submitHandler}>
				<label>
					Enter your name:
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></input>
				</label>
				<input type="submit" value={"Submit"}></input>
			</form>
		</>
	);
}
export default Form;
