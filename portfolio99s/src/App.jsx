import { useState } from 'react'
import Profile from "./assets/Adamimg.jpg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='container m-auto px-4 py-6'>
          <div className='flex justify-between items-start'>
            <div>
              <h1 className='font-bold text-xl'>Adam's Portfolio</h1>
            </div>
            <div>
              <ul className='flex gap-4'>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'> Projects</a>
                </li>
                <li>
                <a className='text-gray-400 hover:text-white cursor-pointer'> Technologies</a>
                </li>
                <li>
                <a className='text-gray-400 hover:text-white cursor-pointer'> About me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/*Main here */}
      <main>

        <section>
          <div className='container m-auto px-4 py-10 flex gap-6'>
          <div>
          <h1 className='font-bold text-4xl'>Hello, Im Adam,</h1>
          <h1 className='font-bold text-4x1 mt-1 gradient-text'>Junior Web Developer.</h1>
          <p className='mt-4 text-gray-400'>A fresh graduates , curently seeking experiences</p>
          </div>
          <div className='ml-5'>
            <img src={Profile} style={{width: 200, height:200, borderRadius: 200 / 2}} width="220" alt="Profile Image"  />
          </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
