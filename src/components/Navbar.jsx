import React,{useEffect,useRef} from 'react'
import logo from "../assets/logo.png"
import search from "../assets/search_icon.svg"
import bell_icon from "../assets/bell_icon.svg"
import profile from "../assets/profile_img.png"
import caret from "../assets/caret_icon.svg"
import { logout } from '../firebase'
const Navbar = () => {
    const navRef = useRef();
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 80) {
          navRef.current.classList.add('navDark');
        } else {
          navRef.current.classList.remove('navDark');
        }
      };

      window.addEventListener('scroll', handleScroll);

      // cleanup to prevent memory leaks
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div ref={navRef} className='Navbar h-10  w-full md:px-5 px-[20px] py-[4%] md:py-0 flex justify-between fixed top-0 text-[14px] text-[#e5e5e5] z-10 bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.4)] to-transparent'>

            <div className="navbar-left flex items-center gap-[50px]">
                <img src={logo} alt="" srcset="" className='w-[90px]' />
                <ul className='hidden  md:flex list-none gap-5'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>TV Shows</li>
                    <li className='cursor-pointer'>Movies</li>
                    <li className='cursor-pointer'>New & Popular</li>
                    <li className='cursor-pointer'>My List</li>
                    <li className='cursor-pointer'>Browse by Languages</li>
                </ul>
            </div>
            <div className="navbar-right flex items-center gap-[10px] md-gap-5 relative group">
                <img src={search} alt="" srcset="" className='w-5 cursor-pointer h-[25px]' />
                <p>Children</p>
                <img src={bell_icon} alt="" className='w-5 h-[20px] cursor-pointer' />
                <div className='flex items-center gap-2 cursor-pointer '>
                    <img src={profile} alt="" className='w-[35px]  rounded-[4px]' />
                    <img src={caret} alt="" srcset="" />
                </div>
                <div className="drop-down absolute top-full right-0 w-fit bg-[#191919] rounded-[4px] underline z-10 hidden group-hover:block ">
                    <p className='text-[15px] cursor-pointer' onClick={()=>{logout()}}>Sign Out of Netflix</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
