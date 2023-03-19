import React, { useReducer } from "react";
import "./style.css";
const reducer = (state, action) => {
	if (action.type === "INCR") {
		state = state + 1;
	}
	if (state > 0 && action.type === "DECR") {
		state = state - 1;
	}
	return state;
};
// This code (useReducer hook) is working similer as useState hook.
// The process is lengthy but, we use this hook in bigger projects.
const UseReducer = () => {
	// dispatch is used to trigger reducer function
	// and reducer change the value of state
	const inintialData = 10;
	const [state, dispatch] = useReducer(reducer, inintialData);
	return (
		<>
			<div className="center_div">
				<p>{state}</p>
				<div className="button2" onClick={() => dispatch({ type: "INCR" })}>
					<span> </span>
					<span></span>
					<span></span>
					<span></span>
					INCR
				</div>
				<div className="button2" onClick={() => dispatch({ type: "DECR" })}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					DECR
				</div>
			</div>
		</>
	);
};

export default UseReducer;
