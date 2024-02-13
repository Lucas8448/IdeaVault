import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS_Quzcib8B06gc4SA1mjnEooiCB2dL40",
  authDomain: "ideavault-fa1e8.firebaseapp.com",
  projectId: "ideavault-fa1e8",
  storageBucket: "ideavault-fa1e8.appspot.com",
  messagingSenderId: "402023629106",
  appId: "1:402023629106:web:a128a4973083d18a7a572b",
  measurementId: "G-05PQ5RF0LV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();