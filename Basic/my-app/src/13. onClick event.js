import React from "react";
function Football() {
	const shoot = () => {
		alert("Great shot!");
	};
	return <button onClick={shoot}>Take the shot</button>;
}
export default Football;
