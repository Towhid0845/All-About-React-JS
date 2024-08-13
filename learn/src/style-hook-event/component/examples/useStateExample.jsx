import React, { useState } from "react";

// ❤️ Example: Click on a button and get current time.
// const UseStateExample = () => {
// 	var currTime = new Date().toLocaleTimeString();
// 	const [time, setTime] = useState(currTime);

// 	const updateTime = () => {
// 		// setTime is getting new current time.
// 		setTime(new Date().toLocaleTimeString());
// 	};
// 	return (
// 		<>
// 			<div style={{ textAlign: "center" }}>
// 				<h1>{time}</h1>
// 				<button onClick={updateTime}>GET TIME</button>
// 			</div>
// 		</>
// 	);
// };

// ❤️ Example: Display a digital clock.
// const UseStateExample = () => {
// 	var currTime = new Date().toLocaleTimeString();
// 	const [time, setTime] = useState(currTime);

// 	const updateTime = () => {
// 		setTime(new Date().toLocaleTimeString());
// 	};
// 	// updating time in every second
// 	setInterval(updateTime, 1000);
// 	return (
// 		<>
// 			<div style={{ textAlign: "center" }}>
// 				<h1>{time}</h1>
// 			</div>
// 		</>
// 	);
// };

// ❤️ Example: onClick event on background color and text.
const UseStateExample = () => {
	const color = "#000";
	const btn = "click me";
	const [bg, setBg] = useState(color);
	const [name, setName] = useState(btn);
	const bgChange = () => {
		// setTime(new Date().toLocaleTimeString());
		let newBg = "#9b7108";
		let newName = "click double";
		setBg(newBg);
		setName(newName);
	};
	const bgBack = () => {
		setBg(color);
		setName(btn);
	};
	return (
		<>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					backgroundColor: bg,
					justifyContent: "center",
					height: "200px",
					width: "200px",
				}}
			>
				{/* <button
					style={{ padding: "10px", fontWeight: "bold" }}
					onClick={bgChange}
					onDoubleClick={bgBack}
				>
					{name}
				</button> */}

				{/* Try this also */}
				<button
					style={{ padding: "10px", fontWeight: "bold" }}
					onMouseEnter={bgChange}
					onMouseLeave={bgBack}
				>
					{name}
				</button>
			</div>
		</>
	);
};

export default UseStateExample;
