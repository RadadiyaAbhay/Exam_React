import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-gray-900 py-4 px-28 flex items-center'>
        <div className="w-2/12">
          <NavLink to={'/'}>
            <h4 className='text-2xl font1 font-bold text-white'>I...Students</h4>
          </NavLink>
        </div>
        <div className="w-8/12"></div>
        <div className="w-2/12">
            <NavLink to={'/add'} className="text-white bg-amber-500 rounded-md px-7 py-2 font-bold">Add Student</NavLink>
        </div>
    </header>
  )
}

export default Navbar