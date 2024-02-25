import React, { useState } from 'react'
import { userData } from './hooks/usersData.js'

const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < userData.length - 1 ? prevSlide + 1 : setCurrentSlide(0)
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : setCurrentSlide(userData.length - 1)
    )
  }

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col text-center items-center justify-center">
        <h1>Sliders</h1>
        <div className="h-[500px] w-[80%] relative  flex flex-col text-center items-center justify-center overflow-hidden">
          <div className="flex w-full h-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `100%`,
              }}
            >
              {userData.map((slider, index) => (
                <div
                  className="  min-w-full h-full bg-red-500 text-black flex flex-col items-center justify-center"
                  key={index}
                >
                  <h1>{slider.user}</h1>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-[50%] z-10"
          >
            PREV
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-[50%] z-10"
          >
            NEXT
          </button>
        </div>
      </div>
    </>
  )
}

export default Sliders
