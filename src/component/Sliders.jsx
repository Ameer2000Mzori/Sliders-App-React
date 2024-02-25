import React from 'react'
import { userData } from './hooks/usersData.js'
const Sliders = () => {
  return (
    <>
      <div>
        <h1>Sliders</h1>
        <div>
          <div>
            {userData.map((slider) => {
              console.log(slider)
            })}
          </div>

          <button>NEXT</button>
          <button>PREV</button>
        </div>
      </div>
    </>
  )
}

export default Sliders
