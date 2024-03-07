import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Login from './Login';
const Home = () => {
  return (
    <>
      <div className="w-[80vw] bg-white min-h-[80vh] flex flex-wrap flex-col md:flex-row">
        <div className="lefte w-[100%] md:w-[50%] flex flex-col justify-center align-items-center p-10 border  ">
        <div className="content flex flex-col gap-16"  >
          <h2 className='text-4xl'>
            Introducing the all new <br /> <span className='font-semibold'>Post Explorer</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, labore. Cupiditate, quos perspiciatis, voluptate enim soluta earum delectus eos.
          </p>
        </div>

        </div>

        <div className="righte w-[100%] md:w-[50%] flex flex-col justify-center align-items-center p-10 border">
        <Login/>
          
        </div>


      </div>
    </>
  )
}

export default Home
