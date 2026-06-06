import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCpWd10gDI9IJu4AApaLEsJmaTJPMQa0j8",
  authDomain: "forexblues-7ff26.firebaseapp.com",
  databaseURL: "https://forexblues-7ff26.firebaseio.com",
  projectId: "forexblues-7ff26",
  storageBucket: "forexblues-7ff26.appspot.com",
  messagingSenderId: "279688203885",
  appId: "1:279688203885:web:79594568e7e75209cdb964",
  measurementId: "G-KDNJF6ZF9M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
