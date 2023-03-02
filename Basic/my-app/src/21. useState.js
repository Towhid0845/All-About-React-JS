import { useState } from "react";

function Mybook() {
	const [color, setColor] = useState("red");
	return <h3>My favorite color is {color}</h3>;
}
export default Mybook;
