// import React from "react";
import ReactDOM from "react-dom";
// import Mybook from "./Hook.js";

// 1️⃣ how to render 🔥
// ReactDOM.render("what to Show", "where to show", "calback function");

// ✅ render directly
// ReactDOM.render(<p>Welcome</p>, document.getElementById("root"));

// ✅ or import a file and render
// import myfirstelement from "./01. how to render";
// ReactDOM.render(myfirstelement, document.getElementById("root"));

// ✅ Render multiple element
// In React v16 it's possible for render() to return an array of elements.
// ReactDOM.render(
// 	[
// 		<h2>Hello Towhid!</h2>,
// 		<h3>How are you ?</h3>,
// 		<h4>What are you doing ?</h4>,
// 	],
// 	document.getElementById("root")
// );

// 2️⃣ add math expressions and JS variable to JSX 🔥
// use pair of curly braces '{}' to show the expression.
// But we can't use statement inside '{}'
// var temp = "Towhid";
// ReactDOM.render(
// 	<>
// 		<h1>
// 			{temp}, React is {5 + 5} time better than JSX.
// 		</h1>
// 	</>,
// 	document.getElementById("root")
// );

// 4️⃣ How to use 'fragment (<></>)' to wrap multiple HTML lines 🔥
// ReactDOM.render(
// 	<>
// 		<p>I am a paragraph.</p>
// 		<p>I am a paragraph too.</p>
// 	</>,
// 	document.getElementById("root")
// );

// 5️⃣ How to use attirbute in JSX 🔥
// import "./05. JS XML.css";
// const temp = "Towhid";
// const link = "https://picsum.photos/200/300";
// ReactDOM.render(
// 	<>
// 		<div className="main">
// 			<h1 contentEditable="true">My name is {temp}</h1> {/* camel case */}
// 			{/* <img src="https://picsum.photos/200/300" alt="error" /> */}
// 			{/* or */}
// 			<img src={link} alt="error" />
// 		</div>
// 	</>,
// 	document.getElementById("root")
// );

// 3️⃣ Add CSS & Google Fonts🔥

// ✅ Google font in React JS
//  add google font link in 'index.html' file.
//  add css rules to the css file.
// import "./03. style.css";
// ReactDOM.render(
// 	<>
// 		<div className="main">
// 			<p contentEditable="true">Without Google Font</p>
// 			<p contentEditable="true">With Google Font</p>
// 		</div>
// 	</>,
// 	document.getElementById("root")
// );

// ✅ Inline Styling
// Syntex: style = {object}
// const style = {
// 	fontSize: "30px",
// 	textTransform: "uppercase",
// 	textShadow: "0px 2px 4px #000",
// 	fontFamily: '"Roboto", sans-serif',
// };
// ReactDOM.render(
// 	<>
// 		<div style={{ fontSize: "30px", textTransform: "uppercase" }}>
// 			<p>This Inline Styling in React JS</p>
// 		</div>
// 		{/* another way: by passing object or internal styling*/}
// 		<div style={style}>
// 			<p>This Inline Styling in React JS</p>
// 		</div>
// 	</>,
// 	document.getElementById("root")
// );

// 6️⃣ 'If statement' work outside of JSX code 🔥
// const x = 5;
// let flag = "Goodbye";
// if (x < 10) {
// 	flag = "Welcome";
// }
// ReactDOM.render(
// 	<>
// 		<h2>{flag}</h2>
// 	</>,
// 	document.getElementById("root")
// );

// 7️⃣ Use ternary expressions instead of 'If statement' 🔥
// const x = 8;
// ReactDOM.render(
// 	<>
// 		<h2>{x < 10 ? "Welcome" : "Goodbye"}</h2>
// 	</>,
// 	document.getElementById("root")
// );

// 8️⃣ Understand React component & Export 🔥
// import Book from "./08. react component"; // This is default export.
// import Book, { name, fullname } from "./08. react component"; // Export all together
// import * as temp from "./08. react component"; // Export all as an object
// ReactDOM.render(
// 	<>
// 		{/* <Book /> */}

// 		{/* <Book />
// 		<p>{name}</p>
// 		<p>{fullname}</p> */}

// 		{/* <temp.default />
// 		<p>{temp.name}</p>
// 		<p>{temp.fullname}</p> */}
// 	</>,
// 	document.getElementById("root")
// );

// 09. How to use a component inside other component.
// import Student from "./09. component inside another component";
// ReactDOM.render(<Student />, document.getElementById("root"));

// 10. How to use Props in component
// import Book from "./10. props";
// ReactDOM.render(<Book color="red" />, document.getElementById("root"));

// 11. How to pass a property one component to another component:
// import Women from "./11. pass props to another component";
// ReactDOM.render(<Women />, document.getElementById("root"));

// 12.How to pass an object one component to another component:
// import University from "./12. pass an object to another component";
// ReactDOM.render(<University />, document.getElementById("root"));

// 13. onclick event:
// import Football from "./13. onClick event";
// ReactDOM.render(<Football />, document.getElementById("root"));

// 14. Pass an argument through event handler:
// import Football from "./14. pass arug through event handler";
// ReactDOM.render(<Football />, document.getElementById("root"));

// 15. Render Using 'if statement':
// import Play from "./15. Render using 'if statement'";
// ReactDOM.render(<Play flag={true} />, document.getElementById("root"));

// 16. Render using 'Logical && operator':
// import Bookshelf from "./16. Render using '&& operator'";
// const books = ["Nobel1", "Nobel2", "Nobel3"];
// // const books = [];
// ReactDOM.render(<Bookshelf books={books} />, document.getElementById("root"));

// 17. Render using 'Ternary operator':
// import Play from "./17. Render using 'Ternary operator'";
// ReactDOM.render(<Play flag={false} />, document.getElementById("root"));

// 18. How react 'List' works:
// import Bookshelf from "./18. List";
// ReactDOM.render(<Bookshelf />, document.getElementById("root"));

// 19. How to use 'Key' in React:
// import Bookshelf from "./19. key";
// ReactDOM.render(<Bookshelf />, document.getElementById("root"));

// 20. How to use 'Hook' in React:
// import Color from "./20. hook example";
// ReactDOM.render(<Color />, document.getElementById("root"));

// 21. useState
// import Mybook from "./21. useState";
// ReactDOM.render(<Mybook />, document.getElementById("root"));

// 22. updateState
// import MyHobby from "./22. updateState";
// ReactDOM.render(<MyHobby />, document.getElementById("root"));

// 23.multipleState
// import MyHobby from "./23. multipleState";
// ReactDOM.render(<MyHobby />, document.getElementById("root"));

// 24. object in a hook
// import MyHobby from "./24. object in a hook";
// ReactDOM.render(<MyHobby />, document.getElementById("root"));

// 25. Updating a object in state
// import MyHobby from "./25. update object in state";
// ReactDOM.render(<MyHobby />, document.getElementById("root"));

// 26. useEffect hook:
// import Timer from "./26. useEffect hook";
// ReactDOM.render(<Timer />, document.getElementById("root"));

// 27. useEffect hook dependent on variable:
// import Counter from "./27. useEffect dependent on veriable";
// ReactDOM.render(<Counter />, document.getElementById("root"));

// 28. clearTimeout for useEffect hook
// import Timer from "./28. clear Timeout using useEffect";
// ReactDOM.render(<Timer />, document.getElementById("root"));

// 29. prop drilling problem
// import Component1 from "./29. prop drilling problem";
// ReactDOM.render(<Component1 />, document.getElementById("root"));

// 30. Solution using 'createContext' and 'useContext' hook:
// import Component1 from "./30. createContext and useContext";
// ReactDOM.render(<Component1 />, document.getElementById("root"));

// 31. Render counting using 'useRef' hook
// import CountRender from "./31. Render counting using 'useRef'";
// ReactDOM.render(<CountRender />, document.getElementById("root"));

// 32. focus input feild using 'useref'
// import Focus from "./32. foucusInput using 'useref'";
// ReactDOM.render(<Focus />, document.getElementById("root"));

// 33. previous state value tracking using 'useRef' hook
// import Tracking from "./33. previous state value tracking using 'useref'";
// ReactDOM.render(<Tracking />, document.getElementById("root"));

// 34. How to handle 'Form' in React:
// import Form from "./34. 'Form' in React";
// ReactDOM.render(<Form />, document.getElementById("root"));

// 35. How to submit form input:
// import Form from "./35. submitting form input";
// ReactDOM.render(<Form />, document.getElementById("root"));

// 36. submitting multiple input feild of a form:
// import Form from "./36. multiple input form submit";
// ReactDOM.render(<Form />, document.getElementById("root"));

// 37. How to use 'textarea' in React:
// import Form from "./37. extarea in form";
// ReactDOM.render(<Form />, document.getElementById("root"));

// 38. How to use select in Form in React:
// import Book from "./38. 'select' in Form in React";
// ReactDOM.render(<Book />, document.getElementById("root"));

// 39. How to use Router in React:
// import App from "./39. Router in React";
// ReactDOM.render(<App />, document.getElementById("root"));

// 40.

// array to list
// const myArray = ["apple", "banana", "orange", "mango"];
// const myList = myArray.map((item) => <p>{item}</p>);
// ReactDOM.render(myList, document.getElementById("root"));
