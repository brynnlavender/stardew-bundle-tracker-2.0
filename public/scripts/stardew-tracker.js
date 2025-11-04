// Stardew Valley Tracker JavaScript

// Function to toggle the visibility of the login and register forms

document.getElementById("login").addEventListener("click", function() {
    document.querySelector(".login").style.display = "block";
    document.querySelector(".register").style.display = "none";
    document.querySelector(".auth-status").style.display = "none";
    hideChecklists();
});

document.getElementById("login-here").addEventListener("click", function() {
    document.querySelector(".login").style.display = "block";
    document.querySelector(".register").style.display = "none";
    document.querySelector(".terms-unchecked").innerHTML = ``;
});

document.getElementById("register-here").addEventListener("click", function() {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".register").style.display = "block";
    document.querySelector(".wrong-email-password").innerHTML = ``;
});

document.querySelectorAll("ion-icon[name=close-outline]").forEach(function(icon) {
    icon.addEventListener("click", function() {
        hideLoginRegisterAuth();
        hideChecklists();
    });
});

function hideLoginRegisterAuth() {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".register").style.display = "none";
    document.querySelector(".auth-status").style.display = "none";
    document.querySelector(".wrong-email-password").innerHTML = ``;
    document.querySelector(".terms-unchecked").innerHTML = ``;
}

function hideChecklists() {
    document.querySelector(".spring-checklist").style.display = "none";
    document.querySelector(".summer-checklist").style.display = "none";
    document.querySelector(".fall-checklist").style.display = "none";
    document.querySelector(".winter-checklist").style.display = "none";
    console.log("All checklists hidden");
}

function fetchItemsForSeason(season) {
    fetch(`http://localhost:5002/api/items/${season}`)
        .then(response => response.json()) // Parse the JSON response
        .then(items => {
            const checklistBody = document.querySelector(`.${season}-body`);
            checklistBody.innerHTML = ''; // Clear any existing items

            // Loop through the items and display them
            items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('item');
                itemElement.innerHTML = `
                    <h3>${item.name}</h3>
                    <img src="${item.imageUrl}" alt="${item.name}">
                    <p>${item.additionalInfo}</p>
                `;
                checklistBody.appendChild(itemElement);
            });
        })
        .catch(error => console.error('Error fetching items:', error));
}

document.getElementById("spring-btn").addEventListener("click", function() {
    document.querySelector(".spring-checklist").style.display = "block";
    document.querySelector(".summer-checklist").style.display = "none";
    document.querySelector(".fall-checklist").style.display = "none";
    document.querySelector(".winter-checklist").style.display = "none";
    console.log("Spring season selected");
    hideLoginRegisterAuth();
    fetchItemsForSeason('spring');
});

document.getElementById("summer-btn").addEventListener("click", function() {
    document.querySelector(".spring-checklist").style.display = "none";
    document.querySelector(".summer-checklist").style.display = "block";
    document.querySelector(".fall-checklist").style.display = "none";
    document.querySelector(".winter-checklist").style.display = "none";
    console.log("Summer season selected");
    hideLoginRegisterAuth();
    fetchItemsForSeason('summer');
});

document.getElementById("fall-btn").addEventListener("click", function() {
    document.querySelector(".spring-checklist").style.display = "none";
    document.querySelector(".summer-checklist").style.display = "none";
    document.querySelector(".fall-checklist").style.display = "block";
    document.querySelector(".winter-checklist").style.display = "none";
    console.log("Fall season selected");
    hideLoginRegisterAuth();
    fetchItemsForSeason('fall');
});

document.getElementById("winter-btn").addEventListener("click", function() {
    document.querySelector(".spring-checklist").style.display = "none";
    document.querySelector(".summer-checklist").style.display = "none";
    document.querySelector(".fall-checklist").style.display = "none";
    document.querySelector(".winter-checklist").style.display = "block";
    console.log("Winter season selected");
    hideLoginRegisterAuth();
    fetchItemsForSeason('winter');
});


