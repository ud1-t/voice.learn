import React from 'react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <div className='flex justify-end bg-[#fff] border border-[#e5e5e5] fixed inset-x-0 top-0 h-16 items-center px-5'>
      <Button className="rounded-full bg-[#4A45FF] hover:bg-[#6A65FF] hover:shadow-lg hover:shadow-[#111]/20 transition-shadow duration-200">Sign in</Button>
    </div>
  )
}

export default Navbar
