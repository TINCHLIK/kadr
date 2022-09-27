import React from 'react'
import { NavLink,useLocation } from 'react-router-dom'

     
const Navbar = () => {
  const {pathname} = useLocation()
  let idArr = pathname.split('/modal/')
  let id = idArr[1]
  return (
    <div  className="flex justify-items-center ">
      {pathname !== `/modal/${id}` && <>
        <NavLink className="text-xl font-bold no-underline text-blue-900 p-1 shadow-md" to='/info'>Info</NavLink>
        <NavLink className="text-xl font-bold no-underline text-blue-900 p-1 shadow-md" to='/form'>Form</NavLink>
      </>
      }
    </div>
  )
}

export default Navbar