import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='w-full h-screen rounded-2xl bg-zinc-900 px-1 flex'>
        <div className='w-full mt-40 px-14 '>
          <div className=' font-["NeueMontreal-bold"]'>
          <h1 className='text-[3vw] uppercase'>Contact</h1>
          <h1 className='text-[4vw]'>Don't be Shy! Hit me up!👇</h1>
          </div>

          <div>
            <div className='flex items-center'>
            
              <span className='inline-block' >
                <MdOutlineEmail width={30} height={30}  />
              </span>
              <div className='px-6'>
              <h1>Mail</h1>
              <a href="">mauryashekhar9837@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Contact
