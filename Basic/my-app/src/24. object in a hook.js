import { useState } from "react";

function MyHobby() {
	const [hobby, sethobby] = useState({
		hobby1: "Travelling",
		hobby2: "Adventure",
		hobby3: "Watching Movie",
		hobby4: "Gardening",
		hobby5: "Cooking",
	});

	return (
		<>
			<p>
				My Hobbies are {hobby.hobby1}, {hobby.hobby2}, {hobby.hobby3},{" "}
				{hobby.hobby4}, {hobby.hobby5}.
			</p>
		</>
	);
}
export default MyHobby;
