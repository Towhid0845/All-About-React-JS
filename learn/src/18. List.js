import React from "react";
function Book(props) {
	return <li>This is {props.name}</li>;
}
function Bookshelf() {
	const books = ["nobel1", "nobel2", "nobel3"];
	return (
		<>
			<h2>This is My Bookshilf</h2>
			<ul>
				{books.map((book) => (
					<Book name={book} />
				))}
			</ul>
		</>
	);
}
export default Bookshelf;
