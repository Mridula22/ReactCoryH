//API Proxies. These functions call our API
export function getUsers() {
    return fetch('http://localhost:3001/users').then(handleResponse);  //fetch uses HTTP GET
}

export function deleteUser(userId) {
    return fetch('http://localhost:3001/users/' + userId, {
        method: "DELETE"
    });
}

function handleResponse(response) {
    if(response.ok) {
        return response.json();
    }
    throw new Error("Network response was not ok.");
}