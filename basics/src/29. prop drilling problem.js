import { useState } from "react";

function Component1() {
	const [user, setUser] = useState("Towhid");

	return (
		<>
			<h2>Hello {user}.</h2>
			<Component2 user={user} />
		</>
	);
}
function Component2({ user }) {
	return (
		<>
			<h2>User 2</h2>
			<Component3 user={user} />
		</>
	);
}
function Component3({ user }) {
	return (
		<>
			<h2>User 3</h2>
			<Component4 user={user} />
		</>
	);
}
function Component4({ user }) {
	return (
		<>
			<h2>User 4</h2>
			<Component5 user={user} />
		</>
	);
}
function Component5({ user }) {
	return (
		<>
			<h2>User 5</h2>
			<h2>Hello {user} again!</h2>
		</>
	);
}
export default Component1;
