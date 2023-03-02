import React from "react";
function Man(props) {
	return <h2>My name is {props.name}</h2>;
}
function Women() {
	// const temp = 'Towhid';	// value pass using variable
	return (
		<>
			<h2>My name is Bristy</h2>
			<Man name="Towhid" />
			{/* <Man name= { temp } />  */}
			{/* use it when value pass through variable */}
		</>
	);
}
export default Women;
