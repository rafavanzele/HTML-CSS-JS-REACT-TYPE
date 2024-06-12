// CARREGANDO DADOS
import React from 'react'
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

  

  // 2 ENVIANDO DADOS
  // selecionando e guardando os dados que vao ser carregados
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })


    // carregamento de dados dinamico
    const addedProduct = await res.json()

    setProducts((prevProducts) => [...prevProducts, addedProduct])
  }


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


      {/* 2 adicionando dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text" value={name} onChange={(e) => setName(e. target.value)}/>
          </label>

          <label>
            <span>Preço:</span>
            <input type="text" value={price} onChange={(e) => setPrice(e. target.value)}/>
          </label>

          <input type="submit" value='Enviar' />
        </form>
    </div>
    </div>
  )
}

export default App
