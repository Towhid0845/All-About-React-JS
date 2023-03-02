import { useState, useEffect } from "react";
function Timer() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);
	});

	return <h2>I can do {count} times better than you.</h2>;
}
export default Timer;
