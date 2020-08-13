import React from 'react'
import './main-styles.scss'
import '../assets/scss/main.scss'

const Fifth = () => {
  return (
    <div>
      <div className="flex">
        <div className="fifth bg-grey-500">1</div>
        <div className="bg-blue-500 w-full fifth_second">2</div>
      </div>
      <div className="flex">
        <div className="w-1/3 bg-purple-500">3</div>
        <div className="w-1/3 bg-green-500">4</div>
        <div className="w-1/3 bg-red-500">5</div>
      </div>
      <div className="flex">
        <div className="w-1/3 bg-orange-500">6</div>
        <div className="w-1/3 bg-blue-500">7</div>
        <div className="w-1/3 bg-purple-500">8</div>
      </div>
    </div>
  )
}

export default Fifth
