import React from 'react'
import Image from 'next/image'

type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServicesCard = ({ description, icon, name }: Props) => {
  return (
    <div>
      <Image
        src={icon}
        width={60}
        height={60}
        alt={name}
        className='mx-auto'
      />

      <h1 className='mt-6 min-h-[64px] flex items-center justify-center text-center text-xl md:text-2xl font-bold text-gray-200'>
        {name}
      </h1>

      <p className='mt-4 text-gray-300 text-normal leading-relaxed'>
        {description}
      </p>
    </div>
  )
}

export default ServicesCard