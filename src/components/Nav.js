import React from 'react'
import { Link } from 'react-router-dom'
import './styles/nav.css'

const Nav = (props) => {
  const { cartAmount } = props
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li className="cartNav">
          <Link to="/cart" >{cartAmount}</Link>
          <div className="cartIcon" />
        </li>
      </ul>
    </nav>
  )
}
export default Nav