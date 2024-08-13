import React from "react";
function Bookshelf(props) {
	const books = props.books;
	return (
		<>
			<h2>Bookshelf</h2>
			{books.length > 0 && (
				<h2>You have {books.length} books in your bookshelf.</h2>
			)}
		</>
	);
}
export default Bookshelf;
