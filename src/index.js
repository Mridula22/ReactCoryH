import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users';


function SayHello() {    //S is uppercase. That is required so that react knows it is a component
    return <h1>Hello from me </h1>;
}

const SayHi = () => <h1>Hi from me </h1>;

ReactDOM.render(<Users />, document.getElementById("root"));

