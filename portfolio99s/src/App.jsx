import { useState } from 'react'
import Profile from "./assets/Adamimg.jpg"
import Biowebproj from "./assets/Biowebproj.jpg"

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
          <h1 className='font-bold text-4xl mt-1 gradient-text'>Junior Web Developer.</h1>
          <p className='mt-4 text-gray-400'>A fresh graduates , who loves to code.</p>
          </div>
          <div className='ml-5'>
            <img src={Profile} style={{width: 200, height:200, borderRadius: 200 / 2}} width="220" alt="Profile Image"  />
          </div>
          </div>
        </section>
        {/*PROJECT SECTION */}
        <section>
          <div className='container m-auto cursor-pointer'>
            <h2 className='text-2xl font-semibold'>Projects</h2>
            <div className='flex gap-10 mt-5'>
            <div className='border rounded-md p-5'>

              <img src={Biowebproj} style={{width:400}} alt="Bioweb project img" />
              <h3 className='text-2xl font-semibold mt-8'>BioDyslexia.com</h3>
              <p className='text-gray-400 text-sm mt-2'>A Schooling System that focused on Children with Autism <br/>using Laravel Framework.</p>
              <div className='flex justify-evenly mt-8'>
              <button className='px-3 py-2 border rounded-full mt-5 bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Preview Here</button>
              </div>
            </div>
            <div>
                {/*IMPLEMENT NEXT IMG HERE */}
            </div>
            </div>

         </div>
        </section>
      </main>
    </>
  )
}

export default App
