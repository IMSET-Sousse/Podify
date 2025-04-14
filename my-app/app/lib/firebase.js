// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY0cF9p1V3N6-yxfIzqiycXIpyQTmBJTU",
  authDomain: "podify-4f901.firebaseapp.com",
  projectId: "podify-4f901",
  storageBucket: "podify-4f901.firebasestorage.app",
  messagingSenderId: "480278801874",
  appId: "1:480278801874:web:ce806031de354ad7a06c0b",
  measurementId: "G-03E0QHNBCK"
};

const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { auth, analytics };