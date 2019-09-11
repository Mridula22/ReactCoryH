import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';


function SayHello() {    //S is uppercase. That is required so that react knows it is a component
    return <h1>Hello from me </h1>;
}

const SayHi = () => <h1>Hi from me </h1>;

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById("root"));

