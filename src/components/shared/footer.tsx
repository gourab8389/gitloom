import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full p-5 flex items-center justify-center'>
      <div className="w-[40%] flex flex-col">
        <div className="flex items-center justify-center gap-2">
          <Link href={"/"}>Home</Link>
          </div>
      </div>
    </div>
  )
}

export default Footer
