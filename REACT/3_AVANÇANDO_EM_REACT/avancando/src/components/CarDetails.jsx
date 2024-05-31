// DESESTRUTURANDO PROPS

const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h2>Desestruturando props</h2>
        <h2>Detalhes do carro:</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails