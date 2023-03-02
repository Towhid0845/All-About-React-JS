import { useState } from "react";

function Color() {
	const [color, setColor] = useState("red");

	return (
		<>
			<h2>My favorite color is {color}.</h2>

			<button type="button" onClick={() => setColor("blue")}>
				Blue
			</button>
			<button type="button" onClick={() => setColor("yellow")}>
				Yellow
			</button>
			<button type="button" onClick={() => setColor("green")}>
				Green
			</button>
			<button type="button" onClick={() => setColor("purpel")}>
				Purpel
			</button>
		</>
	);
}
export default Color;
