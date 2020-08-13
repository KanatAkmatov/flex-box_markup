import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="flex flex-wrap justify-around border-solid border-4 border-gray-600">
      <Link className="bg-orange-400" to="./first">
        First task
      </Link>
      <Link className="bg-orange-400" to="./second">
        Second task
      </Link>
      <Link className="bg-orange-400" to="./third">
        Third task
      </Link>
      <Link className="bg-orange-400" to="./fourth">
        Fourth task
      </Link>
      <Link className="bg-orange-400" to="./fifth">
        Fifth task
      </Link>
      <Link className="bg-orange-400" to="./sixth">
        Sixth task
      </Link>
      <Link className="bg-orange-400" to="./seventh">
        Seventh task
      </Link>
      <Link className="bg-orange-400" to="./eighth">
        Eighth task
      </Link>
      <Link className="bg-orange-400" to="./ninth">
        Ninth task
      </Link>
    </div>
  )
}

export default Menu
