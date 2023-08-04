import React, { useEffect, useRef, useState } from 'react'

import GlobalApi from '../Services/GlobalApi'

import { BiSolidChevronLeftCircle , BiSolidChevronRightCircle } from 'react-icons/bi';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const screenWidth = window.innerWidth;

const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 125
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }
    return (
        <div>
            <BiSolidChevronLeftCircle className="hidden md:block text-white text-[30px] absolute mx-8 mt-[350px] cursor-pointer left-0"
                onClick={() => sliderLeft(elementRef.current)} />
            <BiSolidChevronRightCircle className='hidden md:block text-white text-[30px] absolute mx-8 mt-[350px] cursor-pointer right-0'
                onClick={() => sliderRight(elementRef.current)} />

            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
                {movieList.map((item) => (
                    <img src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full  md:h-[700px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in scale-102 ' />
                ))}
            </div>
        </div>
    )
}

export default Slider