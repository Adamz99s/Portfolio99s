import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='container m-auto'>
          <div className='flex'>
            <div>
              <h1>Adam's Portfolio</h1>
            </div>
            <div>
              <ul>
                <li>
                  <a className='text-gray-400 hover:text-white'> Projects</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
