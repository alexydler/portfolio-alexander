import React from 'react'
import Image from 'next/image'

type Props ={
    icon:string;
    name:string;
    description:string;


};

const ServicesCard = ({description, icon, name}:Props) => {
  return (
    <div>
        <Image src={icon} width={60} height={60} alt='img'/>
        <h1 className='mt-6 text-xl md:text-2xl font-bold text-gray-200'>{name}</h1>
        <p className='mt-6 text-gray-300'>{description}</p>
    </div>
  )
}

export default ServicesCard