import { useRef } from "react";

function Focus() {
	const input = useRef();

	const focusInput = () => {
		input.current.focus();
	};

	return (
		<>
			<input type="text" ref={input}></input>
			<button onClick={focusInput}>Focus</button>
		</>
	);
}
export default Focus;
