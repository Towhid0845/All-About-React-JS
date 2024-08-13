// you don't need to add this after version 17
// import React from "react"; 

const App = () => {
	// Internal styling
	const myStyle = { color: "red" };
	return (
		<>
			{/* Inline styling  */}
			<h2 style={{ color: "red" }}>Welcome to React Learning App {5 + 5}</h2>
			<h2 style={myStyle}>Welcome to React Learning App {5 + 5}</h2>
			<h2>This is Awesome</h2>

			{/* calling another component */}
			<NewComponent />
			{/* <NewComponent /> */}
		</>
	);
};

// 🔥 How react is actually creating it 🔥
// const App = () => {
// 	return React.createElement("h1", {}, "Hi Towhid...");
// };

// 🔥 How nested components works 🔥
const NewComponent = () => {
	return <h1>I am Towhiduzzaman</h1>;
};
export default App;
