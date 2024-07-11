import { useReducer } from "react"

const HookUseReducer = () => {
    // 2 USEREDUCER (basico)
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    }) 


  return (
    <div>
        <h2>2. UseReducer</h2>
        <p>Número: {number}</p>

        <button onClick={dispatch}>Mudar número</button>
    </div>
  )
}

export default HookUseReducer