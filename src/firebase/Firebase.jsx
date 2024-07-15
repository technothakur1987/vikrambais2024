// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwYEVVP4Jz0p7i5ONSZHv5PNinliK2l8k",
    authDomain: "mypersonalportfolio2024.firebaseapp.com",
    projectId: "mypersonalportfolio2024",
    storageBucket: "mypersonalportfolio2024.appspot.com",
    messagingSenderId: "381052100085",
    appId: "1:381052100085:web:88bb303bef867ad58dd4bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app)
export {fireDb}