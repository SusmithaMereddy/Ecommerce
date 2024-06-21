import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navigation.css'
export default function Navigation() {
  const navigate = useNavigate()
  const userRole = localStorage.getItem("userRole")
  const userId = localStorage.getItem("userId")
  console.log(userRole)
  function handleLogout() {
    localStorage.removeItem('userId')
    localStorage.removeItem('userRole')
    navigate('/login')
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      {
        userId ? (
          <>
            {
              userRole === "admin" && <Link to="/add-product">Add Product</Link>
            }
            <Link to="/cart">Cart</Link>
            <Link onClick={handleLogout}>Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )
      }
    </nav>
  )
}

