import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
    const cardsRef = useRef();
    const [apiData, setapiData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2I2MDlmOWYyYzYyNDViZTAxNDQ5NGEzOTFiYzg1NiIsIm5iZiI6MTc1NjQ5ODAxOC40Niwic3ViIjoiNjhiMjA4NjIxOTZmZGU5ZDBmMTU3MjA1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4kGe3m2FYKV3FCmqMmhXimKTzL1Rn1vFCvsF5g6HkA4'
        }
    };

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    };

    useEffect(() => {
        const el = cardsRef.current;
        if (el) {
            el.addEventListener('wheel', handleWheel, { passive: false });
        }

        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res =>setapiData(res.results))
            .catch(err => console.error(err));

    }, []);

    return (
        <div className='title-cards sm:mt-[50px] sm:mb-[30px] mt-[20px] mb-0'>
            <h1 className='mb-[8px] sm:text-xl font-bold text-[20px]'>{title ? title : "Popular on Netflix"}</h1>
            <div className="card-list overflow-x-auto whitespace-nowrap scrollbar-hide" ref={cardsRef}>
                {apiData.map((card, index) => (
                    <Link
                        to={`/player/${card.id}`}
                        className="card relative inline-block mr-4 no-underline text-white "
                        key={index}
                    >
                        <img
                            src={card.backdrop_path ? "https://image.tmdb.org/t/p/w500" + card.backdrop_path : "/fallback.jpg"}
                            alt={card.original_title}
                            className="sm:w-[300px] sm:h-[190px] w-[150px] h-[150px] object-cover rounded-[4px] cursor-pointer"
                        />
                        <p className='absolute bottom-[10px] right-[10px] sm:text-[16px] text-[12px]'>{card.original_title}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default TitleCards;
