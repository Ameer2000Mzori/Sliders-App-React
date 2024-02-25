import React, { useRef } from 'react'
import { userData } from './hooks/usersData.js'
const Sliders = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col text-center items-center justify-center">
        <h1>Sliders</h1>
        <div className="h-[800px] w-[80%] relative bg-red-200 flex flex-col text-center items-center justify-center">
          <div className="bg-red-300 w-[80%] h-[50%] flex flex-row  text-center items-center justify-start overflow-hidden">
            {userData.map((slider, index) => {
              return (
                // Adjust width here to fit multiple items in the row, e.g., w-1/3 for three items to fit
                <div
                  ref={cardsEl}
                  className="min-w-[100%] h-full bg-red-600 text-white flex flex-col items-center justify-center"
                  key={index}
                >
                  <h1>{slider.user}</h1>
                </div>
              )
            })}
          </div>
          <button className=" absolute left-0 top-[50%]">NEXT</button>
          <button className=" absolute right-0 top-[50%]">PREV</button>
        </div>
      </div>
    </>
  )
}

export default Sliders
