import './App.css'
import { Route , Routes } from 'react-router'
import Home from './components/home'
import Dash from './components/dash'
import Nav from './components/nav'

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </>
  )
}

export default App
