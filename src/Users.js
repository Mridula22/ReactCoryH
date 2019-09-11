import React from 'react';
import {getUsers, deleteUser} from './api/userApi';

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [
                { id: 1, name: "Book1", pages: 30 },
                { id: 2, name: "Book2", pages: 31 },
                { id: 3, name: "Book3", pages: 32 },
                { id: 4, name: "Book4", pages: 33 }],

            users: [
                // { id: 1, name: "Tom1", age: 30 },
                // { id: 2, name: "Tom2", age: 31 },
                // { id: 3, name: "Tom3", age: 32 },
                // { id: 4, name: "Tom4", age: 33 }
            ]
        }

        //this.deleteUser = this.deleteUser.bind(this);
    }

    //called after component is mounted
    componentDidMount() {
        getUsers().then(users => this.setState({users: users}));
    }

    deleteUser = userId => {
        deleteUser(userId).then(() => {
            const users1 = this.state.users.filter(user => user.id !== userId);
            this.setState({
                users: users1
            })
        })
    }
        
    renderUser = user => {
        //() => this.deleteUser delays the execution of the function to when someone clickd the button
        return <li key={user.id}><button onClick={() => this.deleteUser(user.id)}>Del</button>{user.name}</li>
}


//The JSX inside render will only be rendered.
render() {

    return (
        <>
            <h1>Users</h1>
            <ul>
                {/*Two ways of donig this*/}
                {/* {users.map(this.renderUser)} */}
                {/* {users.map(user => <li>{user.name}</li>)} */}
                {/* {this.state.books.map(user => <li>{user.name}</li>)} */}
                {this.state.users.map(this.renderUser)}
            </ul>

        </>
    )
}
}

export default Users;