import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDrXCk82CYSFlWDElNVKrJbcJ9eEUzGHXo",
  authDomain: "actividad-15-michelle-gamboa.firebaseapp.com",
  databaseURL: "https://actividad-15-michelle-gamboa-default-rtdb.firebaseio.com",
  projectId: "actividad-15-michelle-gamboa",
  storageBucket: "actividad-15-michelle-gamboa.appspot.com",
  messagingSenderId: "788103844471",
  appId: "1:788103844471:web:4842b6ee666df4623dac72"
};

const db = initializeApp(firebaseConfig);

export default getDatabase(db);