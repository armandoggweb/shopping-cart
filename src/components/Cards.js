import React, { useEffect, useState } from 'react'
import Card from './Card'
import './styles/cards.css'
const Cards = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch('https://fakestoreapi.com/products/', {mode: 'cors'})
      const items = await response.json()
      setProducts(items)
    })()
  }, [])
  return (
    <div className="cards">
      {products.map((product) => {
        return <Card key={product.id} product={product} />
      })
      }
    </div>
  )
}

export default Cards