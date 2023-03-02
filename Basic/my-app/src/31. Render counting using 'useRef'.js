import { useState, useEffect, useRef } from "react";

function CountRender() {
	const [input, setInput] = useState("");

	const count = useRef(0);

	useEffect(() => {
		count.current = count.current + 1;
	});

	return (
		<>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			></input>
			<h2>Render count: {count.current}</h2>
		</>
	);
}
export default CountRender;
