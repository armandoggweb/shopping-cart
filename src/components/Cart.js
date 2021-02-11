import React from 'react'
import './styles/cart.css'
const Cart = (props) => {
  const { ordered } = props
  const orderedList = ordered.map((o) => {
    return (
      <tr key={o.product.id} >
        <td><img src={o.product.image} /></td>
        <td className="title bg-color">{o.product.title}</td>
        <td>{o.product.price}€</td>
        <td className="bg-color">{o.amount}</td>
        <td>{o.product.price * o.amount}€</td>
      </tr >
    )
  })
  const totalPrice = () => {
    if (ordered.length > 0) {
      const totalPricePerProduct = ordered.map((o) => {
        return o.product.price * o.amount
      })
      return totalPricePerProduct.reduce((total, currentPrice) => {
        return total + currentPrice
      })
    }
  }
  return (
    <>
      <h1>Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderedList}
          <tr>
            <th className="total" colSpan="4">TOTAL</th>
            <td >{totalPrice()}€</td>
          </tr>
        </tbody>
      </table>
      <button className="btn payment" type="button" />
    </>
  )
}

export default Cart