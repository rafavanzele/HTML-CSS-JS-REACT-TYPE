// CARREGANDO DADOS
import { useState, useEffect } from 'react'
const url = 'http://localhost:3000/products'

// ESTILOS
import './App.css'

function App() {
  // 1 RESGATANDO DADOS
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch(url)
      
      const data = await res.json()

      setProducts(data)
    }

    getData()

  }, []) //como vamos regarregar os dados apenas uma vez, o segundo argumento é um array vazio

  
  return (
    <div>
      <h1>HTTP em React</h1>
      
      {/* RESGATANDO DADOS */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
