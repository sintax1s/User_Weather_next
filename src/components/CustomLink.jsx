'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const CustomLink = () => {
  const pathName = usePathname();
  return (
    <Link href={pathName === '/' ? '/saved-users' : '/'} className='w-16 h-16 bg-white p-2 fixed bottom-4 left-4 rounded-full flex justify-center items-center z-50'>
      <Image src={pathName === '/' ? '/userLink.png' : '/home.png'} alt='User Icon' width={25} height={25}/>
    </Link>
  )
}

export default CustomLink