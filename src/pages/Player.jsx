import React, { useEffect, useState } from 'react'
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
  const { id } = useParams();
  const Navigate=useNavigate();
  const [apiData, setapiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: '',
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2I2MDlmOWYyYzYyNDViZTAxNDQ5NGEzOTFiYzg1NiIsIm5iZiI6MTc1NjQ5ODAxOC40Niwic3ViIjoiNjhiMjA4NjIxOTZmZGU5ZDBmMTU3MjA1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4kGe3m2FYKV3FCmqMmhXimKTzL1Rn1vFCvsF5g6HkA4'
    }
  };


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setapiData(res.results[0]))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <img src={back_arrow_icon} onClick={()=>{Navigate("/")}} alt="" srcset="" className='absolute
      top-[25px] left-[20px] w-[50px] cursor-pointer' />
      <iframe width="90%" height="90%" className='rounded-[10px]' src={`https://www.youtube.com/embed/${apiData.key}`} title={apiData.name} frameBorder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <div className="player-info flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
