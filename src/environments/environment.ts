// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
  firebase:{
    apiKey: "AIzaSyByF6fwRfLGHZypI7-ylUscKHszSGWekJ8",
    authDomain: "lab11-db.firebaseapp.com",
    databaseURL: "https://lab11-db-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lab11-db",
    storageBucket: "lab11-db.appspot.com",
    messagingSenderId: "889341966872",
    appId: "1:889341966872:web:20571d6275fcbc8508e16d",
    measurementId: "G-5RFYVSV0S5"
  }
};


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyByF6fwRfLGHZypI7-ylUscKHszSGWekJ8",
//   authDomain: "lab11-db.firebaseapp.com",
//   databaseURL: "https://lab11-db-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "lab11-db",
//   storageBucket: "lab11-db.appspot.com",
//   messagingSenderId: "889341966872",
//   appId: "1:889341966872:web:20571d6275fcbc8508e16d",
//   measurementId: "G-5RFYVSV0S5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);