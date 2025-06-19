// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXaUabJnqLxP-T0n280ymZ-pdtXlCuWK8",
  authDomain: "stardew-bundle-tracker-1f233.firebaseapp.com",
  projectId: "stardew-bundle-tracker-1f233",
  storageBucket: "stardew-bundle-tracker-1f233.firebasestorage.app",
  messagingSenderId: "854850511712",
  appId: "1:854850511712:web:2afd0da06351bd1d5d3405",
  measurementId: "G-WRZR7MV1V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://127.0.0.1:9099");

// Logs the user into the web application using email and password

const loginEmailPassword = async () => {
  const loginEmail = document.getElementById("email1").value;
  const loginPassword = document.getElementById("password1").value;
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
    ifUserIsLoggedIn();
  } catch (err) {
    console.error("Login failed:", err);
    document.querySelector(".wrong-email-password").innerHTML = `<span>The email or password is invalid. Please try again.</span>`;
  }
}

document.getElementById("login-btn").addEventListener("click", loginEmailPassword);

// Creates the user account with an email and password

const createAccount = async() => {
  const registerEmail = document.getElementById("email2").value;
  const registerPassword = document.getElementById("password2").value;
  const termsAndConditions = document.getElementById("terms-and-conditions");

  if (termsAndConditions.checked === true) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      ifSuccessfulRegister();
      console.log(userCredential.user);
    } catch (err) {
      alert(err);
    }
  } else {
    document.querySelector(".terms-unchecked").innerHTML = `<span>You must agree to the terms & conditions to continue.</span>`;
  }
}

document.getElementById("register-btn").addEventListener("click", createAccount);

// Logs the user out of their account

const logout = async () => {
  await signOut(auth);
}

document.getElementById("login").addEventListener("click", () => {
  const loginText = document.getElementById("login").textContent;
  if (loginText === "Logout") {
    logout();
    ifUserIsLoggedOut();
  } else {
    document.querySelector(".login").style.display = "block";
  }
});

// Helper functions for changing styles based on auth status

function hideLoginRegister() {
  document.querySelector(".login").style.display = "none";
  document.querySelector(".register").style.display = "none";
}

function ifUserIsLoggedIn() {
  document.getElementById("login").textContent = "Logout";
  document.querySelector(".wrong-email-password").innerHTML = ``;
  hideLoginRegister();
  document.querySelector(".auth-status").style.display = "block";

  document.querySelector(".status-update").innerHTML = `
    <span>You are now logged in.</span>`;
}

function ifUserIsLoggedOut() {
  document.getElementById("login").textContent = "Login";
  hideLoginRegister();
  document.querySelector(".auth-status").style.display = "block";

  document.querySelector(".status-update").innerHTML = `
  <span>You are now logged out.</span>`;
  
  console.log("user is logged out");
}

function ifSuccessfulRegister() {
  hideLoginRegister();
  document.querySelector(".terms-unchecked").innerHTML = ``;
  document.querySelector(".auth-status").style.display = "block";
  document.querySelector(".status-update").innerHTML = `
  <span>Your account has been registered.</span>`;
}