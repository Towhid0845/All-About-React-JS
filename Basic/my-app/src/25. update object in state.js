import { useState } from "react";
function MyHobby() {
	const [hobby, sethobby] = useState({
		hobby1: "Travelling",
		hobby2: "Adventure",
		hobby3: "Watching Movie",
		hobby4: "Gardening",
		hobby5: "Cooking",
	});

	const updateHobby = () => {
		sethobby((previousState) => {
			return { ...previousState, hobby5: "Teaching" };
		});
	};

	return (
		<>
			<h2>
				My Hobbies are {hobby.hobby1}, {hobby.hobby2}, {hobby.hobby3}{" "}
				{hobby.hobby4} and {hobby.hobby5}.
			</h2>
			<button type="button" onClick={updateHobby}>
				HOBBY
			</button>
		</>
	);
}
export default MyHobby;
