import React, { useEffect } from 'react'
import { Route,Routes, useNavigate } from 'react-router-dom'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Player from './pages/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("logged In");
        navigate("/");
      }else{
        console.log("logged Out");
        navigate("/login");
      }
    })
  },[])
  return (
    <div >
        <ToastContainer theme='dark'/>  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>

      </Routes>
      
    </div>
  )
}

export default App
