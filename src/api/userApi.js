//API Proxies. These functions call our API
export function getUsers() {
    return fetch('http://localhost:3001/users').then(handleResponse);  //fetch uses HTTP GET
}

export function getUserById(userId) {
    return fetch('http://localhost:3001/users?id=' + userId)
    .then(handleResponse)
    .then(users => users[0]);  //API returns Array for query. So take the first match
}

export function deleteUser(userId) {
    return fetch('http://localhost:3001/users/' + userId, {
        method: "DELETE"
    });
}

export function addUser(user) {
    return fetch("http://localhost:3001/users/", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(handleResponse);
}

export function editUser(user) {
    return fetch("http://localhost:3001/users/" + user.id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(handleResponse)
}


function handleResponse(response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error("Network response was not ok.");
}