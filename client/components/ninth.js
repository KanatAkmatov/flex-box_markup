import React from 'react'
import './main-styles.scss'
import '../assets/scss/main.scss'

const Ninth = () => {
  return (
    <div className="h-screen flex">
      <div className="ninth_second bg-yellow-300 m-auto ">
        <div className="ninth bg-red-300">1</div>
        <div className="flex justify-center">
          <div className="ninth bg-red-300">2</div>
        </div>
        <div className="flex justify-end">
          <div className="ninth bg-red-300">3</div>
        </div>
      </div>
    </div>
  )
}

export default Ninth
