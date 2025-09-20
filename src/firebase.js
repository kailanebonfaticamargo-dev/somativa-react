import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Sua configuração corrigida
const firebaseConfig = {
  apiKey: "AIzaSyAz0qyIltKa-5J47CwKbhN6rOswaI1qKbU",
  authDomain: "somativa-react.firebaseapp.com",
  projectId: "somativa-react",
  storageBucket: "somativa-react.appspot.com",   // <-- corrigido aqui
  messagingSenderId: "498016166644",
  appId: "1:498016166644:web:bd41a02d26198cbdb2b4a1",
  measurementId: "G-6W20KYK8P5"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
