import React from 'react'
// IMPORTANDO CSS DO MY FORM
import './MyForm.css'
// MANIPULANDO DADOS DE INPUT ATRAVÉS DO STATE (usando método onChange)
import { useState } from 'react'

const MyForm = () => {
    // MANIPULANDO DADOS DE INPUT ATRAVÉS DO STATE (usando método onChange)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [role, setRole] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    console.log(name, email)


    // ENVIO DE FORM
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, bio, role)

        // validação
        // envio

        // LIMPANDO O FORM
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

  return (
    <div>
        {/* CRIANDO O FORM */}
        {/* ENVIO DE FORM */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} value={name || ''}/>
            </div>
            
            {/* LABEL ENVOLVENDO INPUT */}
            <label>
                <span>Email: </span>
                {/*  MANIPULANDO DADOS DE INPUT ATRAVÉS DO STATE SIMPLIFIC.(usando método onChange) */}
                <input type="text" name='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email || ''}/>
            </label>

            {/* TEXTAREA */}
            <label>
                <span>Bio: </span>
                <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>

            {/* SELECT */}
            <label>
                <span>Função no Sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>



            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm