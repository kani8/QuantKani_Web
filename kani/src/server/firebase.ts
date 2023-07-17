import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo1C6DNraMJjqitcv98p2mcMkKfIh4WD0",
  authDomain: "quantkaniauth-dev.firebaseapp.com",
  projectId: "quantkaniauth-dev",
  storageBucket: "quantkaniauth-dev.appspot.com",
  messagingSenderId: "51900229825",
  appId: "1:51900229825:web:4ade3a8ed69a195e710c40",
  measurementId: "G-BCT1NMD7M5",
};
console.log("API Key: ", process.env.VUE_APP_FIREBASE_API_KEY);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
