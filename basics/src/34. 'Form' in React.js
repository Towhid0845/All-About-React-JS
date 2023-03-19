import { useState } from "react";

function Form() {
	const [name, setName] = useState("");

	return (
		<>
			<form>
				<label>
					Enter your name:
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></input>
				</label>
			</form>
		</>
	);
}
export default Form;
