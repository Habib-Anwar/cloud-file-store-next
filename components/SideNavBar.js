import menu from '@/data/menu'
import Image from 'next/image'
import React from 'react'

export default function SideNavBar() {
  return (
    <div className='w-[200px] bg-white h-screen sticky top-0 z-10 shadow-blue-200 shadow-md p-5'>
        <div className='flex justify-center'>
      <Image src='/logo.png' width={160} height={60}>

      </Image>
      </div>
      <button className='flex gap-2 items-center bg-blue-500 p-2 text-white rounded-md px-3 hover:scale-105 transition-all mt-5 justify-center text-[14px]'>Add New File
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

      </button>
      <button className='flex gap-2 items-center bg-sky-400 p-2 text-white rounded-md px-3 hover:scale-105 transition-all mt-1 justify-center text-[14px]'>Create Folder
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
<div>
   
    {
        menu.list.map((item) =>(<div className='flex gap-2 items-center p-2 mt-3 text-gray-500 cursor-pointer hover:bg-blue-500 hover:text-white rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d={item.logo} />
      </svg>
      {item.name}
      
        </div>))
    }
</div>
    </div>
  )
}
