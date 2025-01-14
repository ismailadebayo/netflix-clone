import './Login.css'
import logo from '../../assets/logo.png'
import netflix_spinner from '../../assets/netflix_spinner.gif'
import {login, signup} from '../../firebase'
import { useState } from 'react'

const Login = () => {

  const [signState, setSignState] = useState('Sign In')
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const user_auth =async (e)=>{
    e.preventDefault()
    setLoading(true)
    if(signState==='Sign In'){
      await login(email, password)
    }else{
      await signup(name, email, password)
    }
    setLoading(false)

  }


  return (

    loading? <div className='loading-splinner'><img src={netflix_spinner} alt="" /></div>:
    <div className='login'>
      <img src={logo} alt="" />
      <div className='login-form'>
        <h2>{signState} </h2>
        <form action="">
          {signState==='Sign Up'? <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Name' />: <></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' />
          <button onClick={user_auth} type='submit'> {signState==='Sign In'? 'Sign In': 'Sign Up'}</button>
          <div className='form-help'>
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor=""> Remember me</label>
            </div>
            <p>Need help ?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === 'Sign In'?
           <p>New to Netflix? <span onClick={()=>{setSignState('Sign Up')}}>Sign up now</span></p>
           :
           <p>Already have account ? <span onClick={()=>{setSignState('Sign In')}}>Sign in now</span></p>
        }
         
         
        </div>
      </div>
    </div>
  )
}

export default Login