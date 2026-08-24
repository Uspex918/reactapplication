import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"

import App from "./components/app/app"

import "./index.css"

// const elem = <h2>Hello World!</h2>
// const elem = React.createElement(
//     "h2",
//     { className: "greetings" },
//     "Hello World!",
// )
// console.log(elem)
// const text = "Hello World"
// const elem = (
//     <>
//         <h2 className="">Текст: {text}</h2>
//         <input type="text" id="forma" />
//         <label htmlFor="forma">Label</label>
//         <button tabIndex={0} />
//     </>
// )

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
)
