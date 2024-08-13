import React, { useEffect, useState } from "react";
import "./style.css";
const UseEffect = () => {
	// useEffect do something after render.
	// e.g. after 5 second website will show a popup.
	const [myNum, setMyNum] = useState(0);
	useEffect(() => {
		document.title = `Chats(${myNum})`;
		// every time when I click it will console Hi...
		console.log("Hi...");
	});
	// after adding array dependency, only first time it console Hi...
	// }, []);
	return (
		<>
			<div className="center_div">
				<p>{myNum}</p>
				<div className="button2" onClick={() => setMyNum(myNum + 1)}>
					<span> </span>
					<span></span>
					<span></span>
					<span></span>
					INCR
				</div>
			</div>
		</>
	);
};

export default UseEffect;
