import React from 'react'
import youtube_icon from "../assets/youtube_icon.png"
import twitter_icon from "../assets/twitter_icon.png"
import instagram_icon from "../assets/instagram_icon.png"
import facebook_icon from "../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className='px-[30px] py-[4%] max-w-[1000px] mx-auto my-0'>
      <div className="footer-icons flex gap-5  my-3 ">
        <img src={youtube_icon} className='sm:w-[30px] w-[24px] cursor-pointer' alt="" srcset="" />
        <img src={twitter_icon} className='sm:w-[30px] w-[24px] cursor-pointer' alt="" srcset="" />
        <img src={instagram_icon} className='sm:w-[30px] w-[24px] cursor-pointer' alt="" srcset="" />
        <img src={facebook_icon} className='sm:w-[30px] w-[24px] cursor-pointer' alt="" srcset="" />
      </div>
        <ul className='grid grid-cols-2 sm:grid-cols-4 sm:gap-3.5 gap-[8px] sm:text-[16px] text-[14px] mb-[30px] list-none' >
            <li>Audio Description</li>
            <li>Help Centre</li>
            <li>Gift Cards</li>
            <li>Media Centre</li> 
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
        </ul>
        <p className='text-gray-600 text-[15px]'>&copy; 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
