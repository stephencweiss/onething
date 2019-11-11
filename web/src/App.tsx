import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

interface IUser {
  name: string
  id: number
}

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => {
        console.log({ users })
        setUsers(users)
      })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>users</h1>
        {users.map((user, index) => {
          console.log({ user, index })
          return <p key={index}>{user.name}</p>
        })}
      </header>
    </div>
  )
}

export default App
