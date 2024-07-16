import { useCallback, useState } from "react"

import List from "./List"

const HookUseCallBack = () => {
    const [counter, setCounter] = useState(0)

    const getItemsFromDatabase = useCallback(() => {
        return ['a', 'b', 'c']
    }, [])


  return (
    <div>
        <h2>6 UseCallBack</h2>
        <List getItems={getItemsFromDatabase}/>

        <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
        <p>{counter}</p>

        
    </div>
  )
}

export default HookUseCallBack