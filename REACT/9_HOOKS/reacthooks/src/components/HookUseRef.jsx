import { useEffect, useState, useRef } from "react"

const HookUseRef = () => {
    // 5 USEREF
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    /*
    useEffect = (() => {
        numberRef.current = numberRef.current + 1 
    })
    */

    // 5.1 USEREF E DOM
    const inputRef = useRef()
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setText('')
        
        inputRef.current.focus()
    }

  return (
    <div>
        <h2>5. UseRef</h2>
        <p>O componente renderizou: {numberRef.current}</p>

        <p>Counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Contador 1</button>

        <p>Counter 2: {counter2}</p>
        <button onClick={() => setCounter2(counter2 + 1)}>Contador 2</button>

        {/* 5.1 USEREF E DOM */}
        <h3>5.1 UseRef e DOM</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value={'Enviar'} />
        </form>
    </div>
  )
}

export default HookUseRef