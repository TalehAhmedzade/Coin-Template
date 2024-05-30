import React from 'react'
import { Link } from 'react-router-dom'
import "../nav/Nav.css"
const Nav = () => {
  return (
    <div className='nav'>
      <Link className='link' to={`/`}>Homepage</Link>
      <Link className='link' to={`/AdminPanel`}>Admin Panel</Link>
    </div>
  )
}

export default Nav
