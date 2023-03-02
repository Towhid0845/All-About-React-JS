import { useState } from "react";

function Form() {
	const [textarea, setTextarea] = useState("This is React textarea.");

	const handleChange = (event) => {
		setTextarea(event.target.value);
	};

	return (
		<>
			<form>
				<textarea value={textarea} onChange={handleChange} />
			</form>
		</>
	);
}
export default Form;
