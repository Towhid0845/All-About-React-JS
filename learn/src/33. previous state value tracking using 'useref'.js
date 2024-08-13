import { useState, useEffect, useRef } from "react";

function Tracking() {
	const [input, setInput] = useState("");
	const previousInput = useRef("");

	useEffect(() => {
		previousInput.current = input;
	}, [input]);

	return (
		<>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			></input>
			<h3>Current Value: {input}</h3>
			<h3>Previous Value: {previousInput.current}</h3>
		</>
	);
}
export default Tracking;
