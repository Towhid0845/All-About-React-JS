import { useState } from "react";

function Book() {
	const [book, setBook] = useState("Book01");

	const handleChange = (event) => {
		setBook(event.target.value);
	};

	return (
		<>
			<form>
				<select value={book} onChange={handleChange}>
					<option value="Book01">Book01</option>
					<option value="Book02">Book02</option>
					<option value="Book03">Book03</option>
				</select>
			</form>
		</>
	);
}
export default Book;
