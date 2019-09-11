import React, { useState, useEffect } from 'react';
import Input from './reusable/Input';
import * as userApi from './api/userApi';
import { toast } from 'react-toastify';

const newUser = {
    id: null,
    name: "",
    age: 0
};

function ManageUser(props) {
    //Handle state via the useState Hook
    const [user, setUser] = useState(newUser);
    //const user = userState[0];    
    //const setUser = userState[1];
    //const [user, setUser] = userState;
    //useEffect runs after render()
    useEffect(() => {
        if (props.match.params.userId) {
            //props.match.params.userId this comes from App.js Router
            userApi.getUserById(props.match.params.userId).then(user => {
                setUser(user);
            })
        }
    }, [props.match.params.userId]);  //whenever the userId changes, useEffect reruns

    function handleSave(savedUser) {
        //TODO: Redircect to Users list
        props.history.push("/users");
        toast.success(savedUser.name + " successfully saved ✨");
    }


    function saveUser(event) {
        event.preventDefault();
        user.id 
            ? userApi.editUser(user).then(handleSave) 
            : userApi.addUser(user).then(handleSave);
    }
    function handleChange(event) {
        //debugger;
        //computed property syntax to set a property using a variable
        const newUser = { ...user };
        //computed property syntax to set a property using a variable
        newUser[event.target.name] = event.target.value;
        setUser(newUser);
    }
    function handleAgeChange(event) {

        const newUser = { ...user };
        newUser.age = event.target.value;
        setUser(newUser);
    }
    return (
        <>
            <h1>Manage User</h1>
            <form onSubmit={saveUser}>
                <Input id="user-name" name="name" type="text" onChange={handleChange} value={user.name} label="NAME" />
                <Input id="user-age" name="age" type="number" onChange={handleChange} value={user.age} label="AGE" />


                {/* <div> */}
                {/* name property - this is the property that we want to set onChange */}
                {/* <label htmlFor="user-age">Age</label>
                     <input id="user-age" name="age" type="number" value={user.age} onChange={handleChange}></input> */}
                {/* </div> */}
                <input type="submit" value="SAVE" />
            </form>
        </>
    )
}

export default ManageUser;