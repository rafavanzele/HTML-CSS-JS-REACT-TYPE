// mostrando detalhes dos produtos na home
import { useFetch } from "../hooks/useFetch"
import { useParams } from "react-router-dom"

const Product = () => {
    const {id} = useParams()

    const url = 'http://localhost:3000/products/' + id

    const {data: product} = useFetch(url)

    if (!product) return <p>Carregando...</p>

  return (
    <div>
        <p>ID do produto: {id}</p>

        <div>
            <h1>{product.name}</h1>
            <h2>R${product.price}</h2>
        </div>
    </div>
  )
}

export default Product