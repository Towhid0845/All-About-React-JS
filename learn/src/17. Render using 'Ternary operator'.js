import React from "react";
function Notgoal() {
	return <h3>Goal missed!.</h3>;
}

function Goal() {
	return <h3>Goal!.</h3>;
}

function Play(props) {
	const flag = props.flag;
	return <>{flag ? <Goal /> : <Notgoal />}</>;
}
export default Play;
