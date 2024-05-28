import React from 'react'

const Events = () => {
  // Evento com Função:
  const handleClick = () => {
    console.log('Executou')
  }  

  
  // Função de renderização
  const renderSomething = (x) => {
    if(x) {
        return <h2>Renderizou!</h2>
    } else {
        return <h2>Renderizou outra coisa!</h2>
    }
  }


  return (
    <div>
        <div>
            <button onClick={() => console.log('Clicou')}>Clique Aqui!</button>
        </div>

        {/* Evento com função */}
        <div>
            <button onClick={handleClick}>Clique aqui - com função</button>
        </div>

        
        {/* Função de renderização */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events