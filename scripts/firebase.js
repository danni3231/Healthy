const firebaseConfig = {
   apiKey: "AIzaSyAfpceno5gNLggmvy5zOdl150s_tiq4-OQ",
   authDomain: "healthy-7298e.firebaseapp.com",
   projectId: "healthy-7298e",
   storageBucket: "healthy-7298e.appspot.com",
   messagingSenderId: "26455930235",
   appId: "1:26455930235:web:9b8f745c333cfc6e2df9de",
   measurementId: "G-V4P63Q71NR",
};

const app = firebase.initializeApp(firebaseConfig);
//const analytics = firebase.getAnalytics(app);
const db = app.firestore();

console.log(db);
