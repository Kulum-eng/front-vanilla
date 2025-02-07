const API_URL = "https://tuapi.com/asociaciones";

async function fetchAssociations() {
    const response = await fetch(API_URL);
    const associations = await response.json();
    updateAssociationList(associations);
}

async function addAssociation() {
    const name = document.getElementById("associationName").value;

    if (name) {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        });

        if (response.ok) {
            fetchAssociations();
        }
    }
}

function updateAssociationList(associations) {
    const list = document.getElementById("associationList");
    list.innerHTML = "";
    associations.forEach(association => {
        const li = document.createElement("li");
        li.textContent = association.name;
        list.appendChild(li);
    });
}

fetchAssociations();
