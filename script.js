// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfdAj7hhjmncWchJqaz_Rdm14aGGiso90",
    authDomain: "form-page-3a24d.firebaseapp.com",
    projectId: "form-page-3a24d",
    storageBucket: "form-page-3a24d.firebasestorage.app",
    messagingSenderId: "513775440848",
    appId: "1:513775440848:web:699535a5631effec2f1fd5"
  };
  
  // Initialize Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  // Form submission handler
  document.getElementById("mentorshipForm").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const formData = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      country: document.getElementById("country").value,
      job: document.getElementById("job").value,
      investment: document.getElementById("investment").value,
      hours: document.getElementById("hours").value,
      income: document.getElementById("income").value,
      consent: document.getElementById("consent").checked,
    };
  
    try {
      await addDoc(collection(db, "mentorshipForms"), formData);
      alert("Form submitted successfully!");
      document.getElementById("mentorshipForm").reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred. Please try again.");
    }
  });
  