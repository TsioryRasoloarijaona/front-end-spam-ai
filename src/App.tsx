import './App.css'
import {  Route , Routes } from 'react-router'
import Login from './pages/Login'
import SignUp from '../src/pages/SignUp'


function App() {


  return (
    <>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
  
    </>
  )
}

export default App
