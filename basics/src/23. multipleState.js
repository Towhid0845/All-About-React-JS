import { useState } from "react";
function MyHobby() {
	const [hobby1, sethobby1] = useState("Travelling");
	const [hobby2, sethobby2] = useState("Adventure");
	const [hobby3, sethobby3] = useState("Watching Movie");
	const [hobby4, sethobby4] = useState("Gardening");
	const [hobby5, sethobby5] = useState("Cooking");
	return (
		<>
			<h2>
				My Hobbies are {hobby1}, {hobby2}, {hobby3}, {hobby4} and {hobby5}.
			</h2>
		</>
	);
}
export default MyHobby;
