import React from 'react'
import { Card } from 'flowbite-react';


const Cards = ({ele}) => {
  const no= Math.floor(Math.random()*100);
  
  const url = `https://source.unsplash.com/random/300x300?${no}?night,city`;
  return (
    <>
      <Card
      className="max-w-sm card"
      
    >
    <img src={url}  className='rounded-md' alt="Image"/>
      <h5 className="text-md font-bold tracking-tight text-gray-900">
        {ele.title}
      </h5>
      <h5 className="text-md font-bold tracking-tight text-gray-900">
        {ele.author}
      </h5>
      <p className="text-sm text-gray-700 ">
        {ele.content}
      </p>
    </Card>
    </>
  )
}

export default Cards
