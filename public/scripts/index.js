// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
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

const loginEmailPassword = async () => {
  try {
    const loginEmail = document.getElementById("email1").value;
    const loginPassword = document.getElementById("password1").value;

    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
    document.getElementById("login").textContent = "Logout";
    document.querySelector(".wrong-email-password").innerHTML = ``;
  } catch (err) {
    console.error("Login failed:", err);
    //alert("The email or password is invalid. Please try again.");
    document.querySelector(".wrong-email-password").innerHTML = `<span>The email or password is invalid. Please try again.</span>`;
  }
}

document.getElementById("login-btn").addEventListener("click", loginEmailPassword);
document.getElementById("login-btn").addEventListener("click", () => {
  console.log("Button clicked");
});