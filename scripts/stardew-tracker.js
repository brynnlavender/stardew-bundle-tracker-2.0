document.getElementById("login").addEventListener("click", showLogin());
document.getElementById("login-here").addEventListener("click", showLogin());

function showLogin() {
    document.querySelector(".login").style.display = "block";
    document.querySelector(".register").style.display = "none";
}