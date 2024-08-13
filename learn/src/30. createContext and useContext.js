import { useState, createContext, useContext } from "react";

const userContext = createContext();

function Component1() {
	const [user, setUser] = useState("Towhid");

	return (
		<userContext.Provider value={user}>
			<h2>Hello, I am {user}.</h2>
			<Component2 user={user} />
		</userContext.Provider>
	);
}
function Component2() {
	return (
		<>
			<h2>User 2</h2>
			<Component3 />
		</>
	);
}
function Component3() {
	return (
		<>
			<h2>User 3</h2>
			<Component4 />
		</>
	);
}
function Component4() {
	return (
		<>
			<h2>User 4</h2>
			<Component5 />
		</>
	);
}
function Component5() {
	const user = useContext(userContext);
	return (
		<>
			<h2>User 5</h2>
			<h2>I am {user} again!</h2>
		</>
	);
}
export default Component1;
