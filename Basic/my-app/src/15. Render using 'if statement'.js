import React from "react";
function Not_goal() {
	return <h2>Goal Missed!.</h2>;
}
function Goal() {
	return <h2>Goal!.</h2>;
}
function Play(props) {
	const flag = props.flag;
	if (flag) {
		return <Goal />;
	}
	return <Not_goal />;
}
export default Play;
