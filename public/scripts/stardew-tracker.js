// Stardew Valley Tracker JavaScript

// Function to toggle the visibility of the login and register forms

document.getElementById("login").addEventListener("click", function() {
    document.querySelector(".login").style.display = "block";
    document.querySelector(".register").style.display = "none";
});

document.getElementById("login-here").addEventListener("click", function() {
    document.querySelector(".login").style.display = "block";
    document.querySelector(".register").style.display = "none";
});

document.getElementById("register-here").addEventListener("click", function() {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".register").style.display = "block";
});

document.querySelectorAll("ion-icon[name=close-outline]").forEach(function(icon) {
    icon.addEventListener("click", function() {
        document.querySelector(".login").style.display = "none";
        document.querySelector(".register").style.display = "none";
    });
});
