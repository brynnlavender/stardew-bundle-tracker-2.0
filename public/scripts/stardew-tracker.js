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

document.getElementById("spring-btn").addEventListener("click", function() {
    document.querySelector(".spring-checklist").style.display = "block";
    document.querySelector(".summer-checklist").style.display = "none";
    document.querySelector(".fall-checklist").style.display = "none";
    document.querySelector(".winter-checklist").style.display = "none";
    console.log("Spring season selected");
    hideLoginRegisterAuth();
});

document.getElementById("summer-btn").addEventListener("click", function() {
    document.querySelector(".spring-checklist").style.display = "none";
    document.querySelector(".summer-checklist").style.display = "block";
    document.querySelector(".fall-checklist").style.display = "none";
    document.querySelector(".winter-checklist").style.display = "none";
    console.log("Summer season selected");
    hideLoginRegisterAuth();
});

document.getElementById("fall-btn").addEventListener("click", function() {
    document.querySelector(".spring-checklist").style.display = "none";
    document.querySelector(".summer-checklist").style.display = "none";
    document.querySelector(".fall-checklist").style.display = "block";
    document.querySelector(".winter-checklist").style.display = "none";
    console.log("Fall season selected");
    hideLoginRegisterAuth();
});

document.getElementById("winter-btn").addEventListener("click", function() {
    document.querySelector(".spring-checklist").style.display = "none";
    document.querySelector(".summer-checklist").style.display = "none";
    document.querySelector(".fall-checklist").style.display = "none";
    document.querySelector(".winter-checklist").style.display = "block";
    console.log("Winter season selected");
    hideLoginRegisterAuth();
});


