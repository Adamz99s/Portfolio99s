import { useState } from 'react'
import Profile from "./assets"
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
          <div className='container m-auto px-4 py-10 flex'>
          <div>

          </div>
          <div>
            <img src={Profile} alt="Profile Image" />
          </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
