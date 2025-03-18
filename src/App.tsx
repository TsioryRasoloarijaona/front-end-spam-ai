import './App.css'
import {  Route , Routes } from 'react-router'
import SignUp from '../src/pages/SignUp'
import Phone from './pages/Phone'
import Info from './pages/Info'


function App() {


  return (
    <>
    
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/phone" element={<Phone />} />
      </Routes>
  
    </>
  )
}

export default App
