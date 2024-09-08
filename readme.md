## 🔥 create a React application 🔥
1️⃣ **npx create-react-app xyz-app**
2️⃣ **cd xyz-app**  
3️⃣ **npm start**


## 🔥 File Structure of React 🔥
App.js ➡️ index.js ➡️ index.html
    
    ✅ App.js is a component. This is the actual file where we write all our code. We export it in index.js(or other js file)
    ✅ index.js is works as a medium. It imports the App.js file and render it in the index.html file using an id.
    ✅ index.html is the reason for that we see the project in web browser.


## 🔥 Babel 🔥
    ✅ babel is a JavaScript compiler
    ✅ it wrap's the code for us.
    ✅ It is automatically installed in React when we create a react app.
    ❤️ Example:                            
                code for user               |            code for browser
                -------------               |            ----------------
                                            |    "use strict";
        const towhid = 'web developer';     |    var towhid = 'web developer';
        const myapp = () = {                |    var myapp = function() {
            console.log('Hello Towhid');    |        console.log('Hello Towhid');
        }                                   |    }
Here’s a simple example of a table in Markdown format:

| Name       | Age | City         |
|------------|-----|--------------|
| Alice      | 30  | New York     |
| Bob        | 25  | Los Angeles  |
| Charlie    | 35  | Chicago      |


## 🔥 JSX (JavaScript XML) 🔥
    ✅ It allow us to write JavaScript and HTML code together. 
    ✅ It always return a single element. You must need to wrap all the code within a single tag.
    ✅ It is better to use <></> (syntactic sugar format of <React.Fragment>) as wrapper tag.
    ✅ You need to close all non-closing tag.
    ✅ You must use two-words attribute in camelCase. e.g. onClick={} (but normally onclick()) or use single word normally.
    ✅ We need to write 'className' instead of 'class' because it is an attribute.
    🗄️ See the detail in 📁learn > 📁src > index.js > at point 5

    ❤️ Example
        ReactDOM.render(<h1>Hello Towhid</h1>, document.getElementById("root"));
                        ---------------------
                                 ⬇️            
                            This is JSX 


## 🔥 React Fragment 🔥
    ✅ the JSX code should wrap within a single tag called <React.Fragment></React.Fragment>
    ✅ simplest form of React Fragment is <></>
    🗄️ See the detail in 📁learn > 📁src > index.js > at point 4


## 🔥 Component 🔥
    ✅ At first, it is better to add 'import React from "react"'
    ✅ At least, one function (functional Component) need to add in that component.
    ✅ Function name should be Capitalized.
    ✅ You must return something (JSX).


## 🔥 React Developer Tools 🔥
    ✅ It is a browser(chrome, mozilla, safari, edge) extension for React.
    ✅ We use it to know what components are used in a React application.

## 🌟 ReactDOM.render()
It controls the contents of the container node you pass in. It currently returns a reference to the root ReactComponent instance.

## 🌟 React Hook
    ✅ It allows you to use state and other React features without writing a class.
    ✅ Hooks are the functions which "hook into" React state and lifecycle features from function components.
    ✅ It does not work inside classes.
    ✅ Write it at the top of a functional component(before the function return).
    ✅ Hook can not run under any condition

## 🌟 useState Hook
    ✅ It is used to manage data.
    ✅ It takes a single parameter as initial data.
    ✅ It returns an array of two elements(first: state variable & second: updated function).
    ❤️ Example:
        const [currentValue, setCurrentValue] = useState(initialValue)
        Here, initially currentValue = initialValue;
        when update_function(setCurrentValue) is updated, currentValue = updated_Value
    🗄️ see the detail in 📁learn > 📁src > index.js > at point 20 
    
## 🌟 how to access input field data in JS❓
    ✅ use 'value' and 'onChange' attribute to access it.

## 🌟 Math Functions 🌟
    ✅ variable_name.toFixed(number): how many number you want after decimal point.

## 🌟 key prop in map method 🌟
    ✅ Keys help React identify which items have changed (added/removed/re-ordered).
    ✅ To give a unique identity to every element inside the array, a key is required.
    ✅ When we use map() method to extract a list (every child of the list must contain a unique value), we always should use a key prop.









-------------------------------------------------

🙋‍♂️👨‍🏫 What is React? 🙋‍♂️👨‍🏫
    React is a JavaScript library for building user interfaces and it is all about components

