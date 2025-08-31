// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDCd36sUp43j4wkheIWoVTrXPO2hEUt7vA",
  authDomain: "netflix-clone-66713.firebaseapp.com",
  projectId: "netflix-clone-66713",
  storageBucket: "netflix-clone-66713.firebasestorage.app",
  messagingSenderId: "11506353249",
  appId: "1:11506353249:web:2123e4ff0b18b7bd521620",
  measurementId: "G-Y1ZLZ967JQ"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth= getAuth(app);
const db=getFirestore(app);

const signUp=async(name,email,password)=>{
    try {
       const res= await createUserWithEmailAndPassword(auth,email,password);
       const user=res.user;
        await addDoc(collection(db,"user",{
            uid:user.uid,
            name,
            authProvider:"local",
            email
        }))
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const login=async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const logout=()=>{
    signOut(auth);
}

export {auth,db,login,signUp,logout};