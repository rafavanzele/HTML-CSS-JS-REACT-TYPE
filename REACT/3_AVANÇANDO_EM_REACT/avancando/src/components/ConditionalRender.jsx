import React from 'react'
// CONDITIONAL RENDER

const ConditionalRender = () => {
    const x = true

    const name = 'Rafael'

  return (
    <div>
        {/* Conditional Render */}
        <h2>Conditional Render</h2>
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true, sim!</p>} {/*se x for verdade imprima o p */}


        {/* Conditional Render Ternário */}
        <h2>Conditional Render Ternário</h2>
        {name === 'Pedro' ? (
            <div>Olá Pedro</div>
        ) : (
            <div>Nome não encontrado</div>
        )}
    </div>
  )
}

export default ConditionalRender