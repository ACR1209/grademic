import Image from 'next/image'
import React from 'react'

function ImageWBackground({path, color}: {path: string, color: string}) {
  return (
    
    <div className='w-full p-5 relative h-full'>
       <div
        className={`absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2  bg-${color} w-2/3 lg:w-[500px] h-2/3 md:h-[300px] lg:h-[500px] z-10`}
      ></div>
     <div className="z-20 relative flex w-full items-center justify-center">
        <Image alt="image" className='w-2/3 lg:w-[580px] h-auto' src={path} width={500} height={500} />
      </div>
    </div>
  )
}

export default ImageWBackground