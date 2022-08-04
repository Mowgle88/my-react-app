import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="navbar">
      <span>My-React-App</span>

      <span className="navbar__links">
        <Link className="navbar__link" to="/">Main</Link>
        <Link className="navbar__link" to="/about">About</Link>
        <Link className="navbar__link" to="/posts">Posts</Link>
      </span>
    </nav>
  )
}
