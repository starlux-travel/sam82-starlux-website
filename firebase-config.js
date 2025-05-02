// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJYJ8-CZWaEYsJsARrJ0ZUKCWBVha4_kQ",
  authDomain: "starlux-travel.firebaseapp.com",
  projectId: "starlux-travel",
  storageBucket: "starlux-travel.appspot.com",
  messagingSenderId: "235843970965",
  appId: "1:235843970965:web:490b9e91c87b68ce73789c",
  measurementId: "G-B5C5W51NZM"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { storage, db, auth };
