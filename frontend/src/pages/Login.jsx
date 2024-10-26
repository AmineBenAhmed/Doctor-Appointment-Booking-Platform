import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }
  
  
  return (
    <form className='min-h-[80vh] flex items-center'>
       <div className='flex flex-col m-auto items-start p-8 min-w-[340px] sm:min-w-96 border'  >
        <p className='text-2xl font-semibold mb-4' >{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p> Please {state === 'Sign Up' ? "sign up" : "log in"} to boo appointment </p>
      
        {
          state === 'Sign Up' && <div className='w-full mt-4'>
          <p htmlFor="full name">Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} required />
        </div>
        }

        <div className='w-full mt-4' >
          <p htmlFor="email">Email</p>
          <input  className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setEmail(e.target.email)} value={email} required />
        </div>

        <div className='w-full mt-4' >
          <p htmlFor="password">Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.password)} value={password} required />
        </div>

        <button
          className='bg-primary text-white w-full py-2 my-3 rounded-md text-base'
        >
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>
        {state === 'Sign Up' 
          ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer' >Login here</span> </p> 
          : <p>Create an new account?   <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer' >click here</span> </p>
          }
      
      </div>
    </form>
  )
}

export default Login