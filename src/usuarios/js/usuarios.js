const API_URL = "http://localhost:8080/users";

async function fetchUsers() {
    const response = await fetch(API_URL);
    const users = await response.json();
    updateUserList(users);
}
async function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email })
        });

        if (response.ok) {
            fetchUsers();
        }
    }
}
function updateUserList(users) {
    const list = document.getElementById("usuarios");
    list.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("usuarios");
        li.textContent = `${user.name} - ${user.email}`;
        list.appendChild(li);
    });
}
fetchUsers();
