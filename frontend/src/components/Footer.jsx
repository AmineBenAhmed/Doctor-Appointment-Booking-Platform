import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
        {/*---------- Left Section --------------*/}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more</p>
        </div>
        {/*------------- Center Section ------- */}
        <div>
          <p>COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privaacy policy</li>
          </ul>
        </div>
        {/*---------- Right Section ------------*/}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-334-453-4534</li>
            <li>doctors@gmail.com</li>
          </ul>
        </div>
        {/*---------- Copy right ------------- */}
        <div>
          <hr />
          <p className='py-5 text-sm text-center' >Copyright 2024@ Prescripto - All Rights Reserved </p>
        </div>
        
        </div>
    </div>
  )
}

export default Footer