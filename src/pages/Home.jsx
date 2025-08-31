import React from 'react'
import Navbar from '../components/Navbar'
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png"
import play_btn from "../assets/play_icon.png"
import info_btn from "../assets/info_icon.png"
import TitleCards from '../components/TitleCards';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-portion relative">
        <img src={hero_banner} alt="" srcset="" className='  hidden md:block w-full mask-[linear-gradient(to_right,transparent,black_75%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]' />
        <div className="hero_caption hidden md:block   absolute w-full pl-[4%] sm:px-[6%] bottom-0">
          <img src={hero_title} alt="" srcset="" className='md:w-[90%] max-w-[700px] md:mb-[30px] mb-[10px] w-[30%]' />
          <p className='w-max-[700px] md:text-[17px] md:mb-5 text-[11px] mb-[10px]'>
            Discovering his ties to a secret ancient order, a young man living  in modern Istanbul embarks on a quest to save city from an immortal enemy
          </p>
          <div className="hero-btns mb-[30px] flex sm:gap-2.5 gap-1.5 lg:mb-[50px]">
            <button className='hero-btn  bg-white text-black hover:bg-[#ffffffbf] h-[35px] sm:h-[45px] '><img src={play_btn} alt="" srcset="" className=' md:w-[25px] w-[20px] ' />play
            </button>
            <button className='hero-btn hover:bg-[#6d6d6e66] text-[#fff] bg-[#6d6d6eb3] h-[35px] sm:h-[45px]'><img src={info_btn} alt="" srcset="" className='md:w-[25px] w-[20px] ' />More info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards sm:pl-[6%] pl-[4%]">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
          <TitleCards title={"Only on Netflix"} category={"popular"}/>
          <TitleCards title={"Upcomming"} category={"upcoming"}/>
          <TitleCards title={"Top pics for you"} category={"now_playing"}/>

      </div>
      <Footer/>
    </div>
  )
}

export default Home
