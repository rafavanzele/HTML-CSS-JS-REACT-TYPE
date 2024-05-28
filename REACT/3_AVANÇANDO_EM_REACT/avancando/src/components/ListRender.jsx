// RENDERIZAÇÃO DE LISTA

import { useState } from "react"

const ListRender = () => {
    // Renderização de lista SEM key(id)
    const [list] = useState(['Rafael', 'Jair', 'Sueli', 'Bruna', 'Thiago'])


    // Renderização de lista COM key(id) aka melhor pratica de renderização
    const [users, setUsers] = useState([
        {id: 1, name: 'João', age: 55},
        {id: 2, name: 'Ana', age: 37},
        {id: 3, name: 'Belinda', age: 40},
    ])


    // PREVIOUS STATE
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4) //Nesse exemplo é * 4 por causa do no. de elementos desse array. Sempre no. + 1!!!

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }

  return (
    <div>
        {/* Renderização de lista SEM key(id) */}
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>

        {/* Renderização de lista COM key(id) */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} anos.</li>
            ))}
        </ul>


        {/* PREVIOUS STATE */}
        <button onClick={deleteRandom}>Deletar user aleatório</button>
    </div>
  )
}

export default ListRender