import { useState } from 'react';
import Signup from './signup/index';
import Login from './login/index';

export default function Home() {
  const [active, setActive] = useState('Signup')
  
  return (
    <main
      className='flex min-h-screen flex-col items-center gap-4 p-24'
    >
      <header className='flex justify-between gap-2'>
        <button className='border border-1 p-2 rounded-lg' onClick={() => setActive('Signup')}>Signup</button>
        <button className='border border-1 p-2 rounded-lg' onClick={() => setActive('Login')}>Login</button>
      </header>
      
      {active === 'Signup' ? <Signup /> : <Login />}
    </main>
  )
}
