import React from 'react'
import FolderItem from './FolderItem'


export default function FolderList() {
    const folderList=[
        {
             id:1,
             name:'Folder 1 to Test Big Text'
         },
         {
             id:2,
             name:'Folder 2'
         },
         {
             id:3,
             name:'Folder 3'
         },
         {
             id:4,
             name:'Folder 4'
         },
         {
             id:5,
             name:'Folder 5'
         }
     ]
  return (
    
    <div className='p-5 mt-5 bg-white rounded-lg'>
       <h2 className='text-[17px] font-bold items-center'>
        Recent Folders 
        <span className='float-right text-blue-400 font-normal text-[13px]'>View All</span>
       </h2>
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-3'>
        {
            folderList.map((item =>
                <FolderItem key={item.id}
                folder={item}></FolderItem>))
        }
       </div>
    </div>
  )
}
