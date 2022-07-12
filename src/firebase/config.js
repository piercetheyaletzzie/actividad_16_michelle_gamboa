import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB8gNyMGk2XS8axBVJ7Koh9cDPmSA5PPAY",
  authDomain: "actividad-15-1c02d.firebaseapp.com",
  databaseURL: "https://actividad-15-1c02d-default-rtdb.firebaseio.com",
  projectId: "actividad-15-1c02d",
  storageBucket: "actividad-15-1c02d.appspot.com",
  messagingSenderId: "949898823742",
  appId: "1:949898823742:web:68163a577caf3db2dbe96f"
};

const db = initializeApp(firebaseConfig);

export default getDatabase(db);