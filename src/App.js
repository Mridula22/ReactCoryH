import React from 'react';
import Users from './Users';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ManageUser from './ManageUser';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <ToastContainer />
            <ul>
                <li>
                    <Link to="/">
                        Home
                </Link>
                </li>
                <li>
                    <Link to="/users">
                        Users
                </Link>
                </li>
            </ul>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/manage-user/:userId" component={ManageUser} />
            <Route path="/manage-user" component={ManageUser} />
            {/* <Home />
            <Users /> */}
            </Switch>
        </>
    )
}

export default App;