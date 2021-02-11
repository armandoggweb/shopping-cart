import React, { useEffect, useContext } from 'react'
import { CartContext } from '../App'
import './styles/card.css'

const Card = props => {
  const addToCart = useContext(CartContext)
  const { product } = props
  const handleClick = event => addToCart(product, event)

  useEffect(() => {

  })
  return (
    <div className="card">
      <img
        className="card-img"
        src={product.image}
      />
      <a href="#">
        <p>{product.title}</p>
      </a>
      <div>
        <p>{product.price}€</p>
        <AmountForm onClick={handleClick} />
      </div>
    </div>
  )

}

const AmountForm = (props) => {
  const increment = event => event.target.parentNode.querySelector('input').value++
  const decrement = event => {
    const input = event.target.parentNode.querySelector('input')
    if (input.value > 0) input.value--
  }
  return (
    <div className="amountForm">
      <input type="number" name="amount" min="1" max="99" />
      <button className="btn increment" onClick={increment} />
      <button className="btn decrement" onClick={decrement} />
      <button className="btn addCartIcon" onClick={props.onClick} />
    </div>)
}

export default Card
