import React from "react";

function Student(props) {
	return <h3>My name is {props.info.Surname}.</h3>;
}
function University() {
	const std_info = { name: "Towhid", Surname: "Zaman" };

	return (
		<>
			<h2>I am a Graduate student.</h2>
			<Student info={std_info} />
		</>
	);
}
export default University;
