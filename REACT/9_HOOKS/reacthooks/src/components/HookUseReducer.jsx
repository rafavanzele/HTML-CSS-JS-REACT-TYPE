import { useReducer, useState } from "react"

const HookUseReducer = () => {
    // 2 USEREDUCER (basico)
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    }) 


    // 2.1 AVANÇANDO NO USEREDUCER
    const initialTasks = [
      {id: 1, text: 'Fazer alguma coisa'},
      {id: 2, text: 'Fazer outra coisa'},
    ]

    const taskReducer = (state, action) => {
      switch(action.type) {
        case 'ADD':
          const newTask = {
            id: Math.random(),
            text: taskText
          }

          setTaskText('')
          return [...state, newTask]


        case 'DELETE':
          return state.filter((task) => task.id !== action.id)


        default:
          return state
      }


    }

  const [taskText, setTaskText] = useState('')
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatchTasks({type: 'ADD'})
  }

  const removerTask = (id) => {
    dispatchTasks({type: 'DELETE', id})
  }


  return (
    <div>
        <h2>2. UseReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Mudar número</button>

        <h3>2.1 Tarefas</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText}/>
          <input type="submit" value={'Enviar'} />
        </form>

        <ul>
          {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => removerTask(task.id)}>{task.text}</li>
          ))}
        </ul>

        <hr />
    </div>
  )
}

export default HookUseReducer