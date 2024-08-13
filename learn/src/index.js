import React from "react";
import ReactDOM from "react-dom/client";
// import "./05. JS XML.css";
// import App from "./style-hook-event/App";
// import HookApp from "./style-hook-event/HookApp";
// import ExampleApp from "./style-hook-event/ExampleApp";
// import Mybook from "./Hook.js";
// import MyHobby from "./23. multipleState";
// import MyHobby from "./24. object in a hook";
// import MyHobby from "./25. update object in state";
// import Timer from "./26. useEffect hook";
// import Counter from "./27. useEffect dependent on veriable";
// import Timer from "./28. clear Timeout using useEffect";
// import Component1 from "./29. prop drilling problem";
// import Component1 from "./30. createContext and useContext";
// import CountRender from "./31. Render counting using 'useRef'";
// import Focus from "./32. foucusInput using 'useref'";
// import Tracking from "./33. previous state value tracking using 'useref'";
const root = ReactDOM.createRoot(document.getElementById("root"));

// 1️⃣ how to render 🔥
// root.render("what to Show", "where to show", "calback function");

// ✅ render directly
// root.render(<p>Welcome</p>);

// ✅ or import a file and render
// import myfirstelement from "./01. how to render";
// root.render(myfirstelement);

// ✅ Render multiple element
// In React v16 it's possible for render() to return an array of elements.
// root.render(
// 	[
// 		<h2>Hello Towhid!</h2>,
// 		<h3>How are you ?</h3>,
// 		<h4>What are you doing ?</h4>,
// 	]
//
// );

// 2️⃣ add math expressions and JS variable to JSX 🔥
// use pair of curly braces '{}' to show the expression.
// But we can't use statement inside '{}'
// var temp = "Towhid";
// root.render(
// 	<>
// 		<h1>
// 			{temp}, React is {5 + 5} time better than JSX.
// 		</h1>
// 	</>
//
// );

// 4️⃣ How to use 'fragment (<></>)' to wrap multiple HTML lines 🔥
// root.render(
//     <>
// 		<p>I am a paragraph.</p>
// 		<p>I am a paragraph too.</p>
// 	</>
// )

// 5️⃣ How to use attribute in JSX 🔥

// const temp = "Towhid";
// const link = "https://picsum.photos/200/300";
// root.render(
//     <>
//         <div className="main">
//             <h1 contentEditable="true">My name is {temp}</h1> {/* camel case */}
//             {/* <img src="https://picsum.photos/200/300" alt="error" /> */}
//             {/* or */}
//             <img src={link} alt="error" />
//         </div>
//     </>
// )


// 3️⃣ Add CSS & Google Fonts🔥

// ✅ Google font in React JS
//  add google font link in 'index.html' file.
//  add css rules to the css file.
// import "./03. style.css";
// root.render(
// 	<>
// 		<div className="main">
// 			<p contentEditable="true">Without Google Font</p>
// 			<p contentEditable="true">With Google Font</p>
// 		</div>
// 	</>
//
// );

// ✅ Inline Styling
// Syntax: style = {object}
// const style = {
// 	fontSize: "30px",
// 	textTransform: "uppercase",
// 	textShadow: "0px 2px 4px #000",
// 	fontFamily: '"Roboto", sans-serif',
// };
// root.render(
// 	<>
// 		<div style={{ fontSize: "30px", textTransform: "uppercase" }}>
// 			<p>This Inline Styling in React JS</p>
// 		</div>
// 		{/* another way: by passing object or internal styling*/}
// 		<div style={style}>
// 			<p>This Inline Styling in React JS</p>
// 		</div>
// 	</>
//
// );

// 6️⃣ 'If statement' work outside of JSX code 🔥
// const x = 5;
// let flag = "Goodbye";
// if (x < 10) {
// 	flag = "Welcome";
// }
// root.render(
// 	<>
// 		<h2>{flag}</h2>
// 	</>
//
// );

// 7️⃣ Use ternary expressions instead of 'If statement' 🔥
// const x = 8;
// root.render(
// 	<>
// 		<h2>{x < 10 ? "Welcome" : "Goodbye"}</h2>
// 	</>
//
// );

// 8️⃣ Understand React component & Export 🔥
// import Book from "./08. react component"; // This is default export.
// import Book, { name, fullname } from "./08. react component"; // Export all together
// import * as temp from "./08. react component"; // Export all as an object
// root.render(
// 	<>
// 		{/* <Book /> */}

// 		{/* <Book />
// 		<p>{name}</p>
// 		<p>{fullname}</p> */}

// 		{/* <temp.default />
// 		<p>{temp.name}</p>
// 		<p>{temp.fullname}</p> */}
// 	</>
//
// );

// 9️⃣ How to use a component inside other component.
// import Student from "./09. component inside another component";
// root.render(<Student />);

// 🔟 How to use Props in component
// import Book from "./10. props";
// root.render(<Book color="red" />);

// 11.How to pass a props one component to another component 🔥
// import Women from "./11. pass props to another component";
// root.render(<Women />);

// 12.How to pass an object one component to another component 🔥
// import University from "./12. pass an object to another component";
// root.render(<University />);

// 14. Pass an argument through event handler 🔥
// import Football from "./14. pass arug through event handler";
// root.render(<Football />);

// 15. Render Using 'if statement':
// import Play from "./15. Render using 'if statement'";
// root.render(<Play flag={true} />);

// 16. Render using 'Logical && operator':
// import Bookshelf from "./16. Render using '&& operator'";
// const books = ["Nobel1", "Nobel2", "Nobel3"];
// // const books = [];
// root.render(<Bookshelf books={books} />);

// 17. Render using 'Ternary operator':
// import Play from "./17. Render using 'Ternary operator'";
// root.render(<Play flag={false} />);

// 18. How react 'List' works:
// import Bookshelf from "./18. List";
// root.render(<Bookshelf />);

// 19. How to use 'Key' in React:
// import Bookshelf from "./19. key";
// root.render(<Bookshelf />);

// 20. How to use 'Hook' in React:
// root.render(
// 	<>
// 		<React.StrictMode>
// 			<App />
// 			{/* <HookApp /> */}
// 			{/* <ExampleApp /> */}
// 		</React.StrictMode>
// 	</>
// );

// 21.multipleState
// root.render(<MyHobby />);

// 24. object in a hook
// root.render(<MyHobby />);

// 25. Updating a object in state
// root.render(<MyHobby />);

// 26. useEffect hook:
// root.render(<Timer />);

// 27. useEffect hook dependent on variable:
// root.render(<Counter />);

// 28. clearTimeout for useEffect hook
// root.render(<Timer />);

// 29. prop drilling problem
// root.render(<Component1 />);

// 30. Solution using 'createContext' and 'useContext' hook:
// root.render(<Component1 />);

// 31. Render counting using 'useRef' hook
// root.render(<CountRender />);

// 32. focus input felid using 'useref'
// root.render(<Focus />);

// 33. previous state value tracking using 'useRef' hook
// root.render(<Tracking />);

// 34. How to handle 'Form' in React:
// import Form from "./34. 'Form' in React";
// root.render(<Form />);

// 35. How to submit form input:
// import Form from "./35. submitting form input";
// root.render(<Form />);

// 36. submitting multiple input felid of a form:
// import Form from "./36. multiple input form submit";
// root.render(<Form />);

// 37. How to use 'textarea' in React:
// import Form from "./37. extarea in form";
// root.render(<Form />);

// 38. How to use select in Form in React:
// import Book from "./38. 'select' in Form in React";
// root.render(<Book />);

// 39. How to use Router in React:
// import App from "./39. Router in React";
// root.render(<App />);

// 40.

// array to list
// const myArray = ["apple", "banana", "orange", "mango"];
// const myList = myArray.map((item) => <p>{item}</p>);
// root.render(myList);
