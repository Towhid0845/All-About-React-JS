import { useState, useEffect } from "react";

function Timer() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let timer = setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return <h2>I have returned this {count} times.</h2>;
}
export default Timer;
