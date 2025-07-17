import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className=" overflow-x-auto mt-10 h-[55%] py-5 w-full flex items-center justify-start gap-5 flex-nowrap  ">
        <div className="h-full bg-red-400 w-[300px] rounded-xl p-5  flex-shrink-0">
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20-feb-2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>
                Make a youtube Video
            </h2>
             <p className="text-sm mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab magni doloremque sint nostrum fugiat illum!
             </p>
        </div>

        <div className="h-full bg-green-400 w-[300px] rounded-xl p-5  flex-shrink-0">
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20-feb-2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>
                Make a youtube Video
            </h2>
             <p className="text-sm mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab magni doloremque sint nostrum fugiat illum!
             </p>
        </div>

        <div className="h-full bg-blue-400 w-[300px] rounded-xl p-5  flex-shrink-0">
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20-feb-2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>
                Make a youtube Video
            </h2>
             <p className="text-sm mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab magni doloremque sint nostrum fugiat illum!
             </p>
        </div>

        <div className="h-full bg-yellow-400 w-[300px] rounded-xl p-5  flex-shrink-0">
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20-feb-2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>
                Make a youtube Video
            </h2>
             <p className="text-sm mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab magni doloremque sint nostrum fugiat illum!
             </p>
        </div>
        
      </div>
  )
}

export default TaskList