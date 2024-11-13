// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyCFeNgW95QHo-nQCtoTG6bvGOzhgC6DPaA",
	authDomain: "questionario-b3529.firebaseapp.com",
	databaseURL: "https://questionario-b3529-default-rtdb.firebaseio.com",
	projectId: "questionario-b3529",
	storageBucket: "questionario-b3529.firebasestorage.app",
	messagingSenderId: "349317797181",
	appId: "1:349317797181:web:a2a3e7930ed42f846be154",
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {db, auth}