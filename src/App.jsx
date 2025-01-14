import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Player from './pages/player/Player'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './firebase'
import { ToastContainer, } from 'react-toastify';


const App = () => {

const navigate = useNavigate()

useEffect(()=>{
  onAuthStateChanged(auth, async(user)=>{
    if(user){
      console.log('Logged In')
      navigate('/')
    }else{
      console.log('Logged out')
      navigate('/login')
    }
  })
})
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
    
    </div>
  )
}

export default App