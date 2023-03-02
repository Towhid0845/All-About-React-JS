import React from "react";

function Book(props) {
	return <li>This is {props.name}</li>;
}

function Bookshelf() {
	const books = [
		{ id: 1, name: "Book 1" },
		{ id: 2, name: "Book 2" },
		{ id: 3, name: "Book 3" },
	];
	return (
		<>
			<h2>This is My Bookshelf.</h2>
			<ul>
				{books.map((book) => (
					<Book key={book.id} name={book.name} />
				))}
			</ul>
		</>
	);
}
export default Bookshelf;
