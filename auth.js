import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

signupBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  try { await createUserWithEmailAndPassword(auth, email, pass); alert("Account created!"); } 
  catch(e){ alert(e.message); }
});

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  try { await signInWithEmailAndPassword(auth, email, pass); alert("Logged in!"); logoutBtn.classList.remove("hidden"); } 
  catch(e){ alert(e.message); }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth); alert("Logged out"); logoutBtn.classList.add("hidden");
});
