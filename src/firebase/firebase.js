import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJXZnh3DCNUHW-QkJAOCMu2-b9j5zVqHA",
    authDomain: "expense-manager-7e493.firebaseapp.com",
    databaseURL: "https://expense-manager-7e493-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "expense-manager-7e493",
    storageBucket: "expense-manager-7e493.appspot.com",
    messagingSenderId: "655463524789",
    appId: "1:655463524789:web:b7ef4299b2f9b6fdff51fc",
    measurementId: "G-R5HWQXYC1X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.database().ref().set({
    name: "Dibash Tandukar",
    age: 26,
    isSingle: true,
    location: {
        city: "Kathmandu",
        country: "Nepal"
    }
});
firebase.database().ref('location/city').set("Pohara");
firebase.database().ref('attributes').set({
    height: 175,
    weight: 52
});
