import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { login,signUp } from '../firebase'
import netflix_spinner from "../assets/netflix_spinner.gif";
const Login = () => {
  const [signState, setsignState] = useState("Sign In");
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading,setLoading]=useState(false);
  const user_auth=async(event)=>{
    setLoading(true);
    event.preventDefault();
    if(signState==='Sign In'){
      await login(email,password);
    }else{
      await signUp(name,email,password);
    }
    setLoading(false);
  }
  return (
    loading?<div className='login-spinner w-full h-[100vh] flex items-center justify-center'><img src={netflix_spinner} className='w-[60px]' alt="" srcset="" /></div>:
    <div className='h-[100vh] bg-[linear-gradient(#000000,_transparent),url("/background_banner.jpg")] bg-cover bg-center '>
      <img src={Logo} alt="" srcset="" className='w-[150px] mt-[20px] ml-[20px]' />
      <div className=' login-form p-[20px] mt-[30px] w-full max-w-[450px] bg-[rgba(0,0,0,.75)] rounded-[4px] md:p-[60px] m-auto'>
        <h1 className='text-[32px] font-semibold mb-[28px]'>{signState}</h1>
        <form  >
          {signState === "Sign Up" && <input value={name} className='input' type="text" placeholder='Your Name' onChange={(e)=>setName(e.target.value)} />}

          <input className='input' value={email} type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
          <input className='input' value={password} type="password" placeholder='password' onChange={(e)=>setPassword (e.target.value)} />
          <button onClick={user_auth} type='submit' className='w-full border-0 outline-0 p-3 bg-[#e50914] text-white rounded-[4px] text-[15px] font-semibold mt-5 cursor-pointer'>{signState}</button>
          <div className="form-help flex items-center justify-between text-[#b3b3b3] text-[13px] mt-3">
            <div className="remember flex items-center gap-[5px]">
              <input type="checkbox" name="" id="remember" className='w-[18px] h-[18px]' />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch mt-[40px] text-[#737373]">
          {signState === "Sign In" ? <p>New to Netflix? <span onClick={() => { setsignState("Sign Up") }} className='ml-[6px] text-[#fff] font-semibold cursor-pointer'>Sign Up now</span></p> : <p>Already have an account? <span onClick={() => { setsignState("Sign In") }} className='ml-[6px] text-[#fff] font-semibold cursor-pointer'>Sign In now</span></p>}


        </div>
      </div>
    </div>
  )
}

export default Login
