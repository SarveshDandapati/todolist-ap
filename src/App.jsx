import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import RegisterForm from './Components/RegisterForm'
import LoginForm from './Components/LoginForm'
import DashboardPage from './pages/DashboardPage'
import NewTodo from './Components/NewTodo'
import { Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route exact path='/' element={<LoginForm />} />
        <Route exact path='/register' element={<RegisterForm />} />
        <Route exact path='/dashboard' element={<DashboardPage />} />
        <Route exact path='/newtodo' element={<NewTodo />} />
      </Routes>

    </>
  )
}

export default App
