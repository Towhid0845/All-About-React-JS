import React from "react";
function Book() {
	return <h2>It is a nobel.</h2>;
}
function Student() {
	return (
		<>
			<h2>This is my book.</h2>
			<Book />
		</>
	);
}
export default Student;
