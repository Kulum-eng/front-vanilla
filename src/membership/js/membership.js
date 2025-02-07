const API_URL = "https://tuapi.com/membership";

async function fetchMemberships() {
    const response = await fetch(API_URL);
    const memberships = await response.json();
    updateMembershipList(memberships);
}

async function addMembership() {
    const userId = document.getElementById("userId").value;
    const associationId = document.getElementById("associationId").value;

    if (userId && associationId) {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, associationId })
        });

        if (response.ok) {
            fetchMemberships();
        }
    }
}

function updateMembershipList(memberships) {
    const list = document.getElementById("membershipList");
    list.innerHTML = "";
    memberships.forEach(membership => {
        const li = document.createElement("li");
        li.textContent = `Usuario ${membership.userId} -> Asociación ${membership.associationId}`;
        list.appendChild(li);
    });
}

fetchMemberships();
