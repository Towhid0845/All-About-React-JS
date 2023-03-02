import { useState } from "react";

function MyHobby() {
	const [hobby, sethobby] = useState("Travelling");
	return (
		<>
			<h2>My Hobby is {hobby}.</h2>
			<button type="button" onClick={() => sethobby("Watching Movie")}>
				Hobby
			</button>
		</>
	);
}
export default MyHobby;
