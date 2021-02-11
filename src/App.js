import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'
import Nav from './components/Nav'
import Cart from './components/Cart'
import './App.css';

const CartContext = React.createContext()

const App = () => {
  const [cartAmount, setCartAmount] = useState(0)
  const [ordered, setOrdered] = useState([])

  const addToCart = (product, event) => {
    const amount = parseInt(event.target.parentNode.querySelector('input').value)
    if (amount > 0) {
      const alreadyOrdered = ordered.some((o) => o.product.id === product.id)
      if (alreadyOrdered) {
        setOrdered(updateOrder(ordered, amount, product))
      } else {
        setCartAmount(cartAmount + 1)
        setOrdered(ordered.concat({
          product: product,
          amount: amount
        }))
      }
    }
  }
  useEffect(() => {


  })
  return (
    <div className="app">
      <Router>
        <Nav cartAmount={cartAmount} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <CartContext.Provider value={addToCart}>
              <Shop />
            </CartContext.Provider>
          </Route>
          <Route path="/cart">
            <Cart ordered={ordered} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const updateOrder = (ordered, amount, product) => {
  let orderModified = ordered.filter((o) => o.product.id === product.id)[0]
  orderModified.amount = amount
  return (
    ordered.map(o => {
      if (o.product.id === orderModified.product.id) {
        o = orderModified
      }
      return o
    })
  )
}

export default App
export { CartContext }
