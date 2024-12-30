import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"} className='cursor-pointer'>
        <Image src={"/logo.svg"} alt='logo' height={75} width={75} className='shrink-0'/>
    </Link>
  )
}

export default Logo;
