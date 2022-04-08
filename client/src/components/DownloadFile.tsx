import React from 'react'

const DownloadFile = ({downloadPageLink}) => {
  return (
    <div className='p-1'>
        <h1 className='my-2 text-lg font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, corrupti!</h1>
        <div className='flex space-x-3'>
            <span className='break-all'>{downloadPageLink}</span>
            {/* icon */}
            {/* copy link  */}
            <img src="#" alt="#" onClick={() => navigator.clipboard.writeText(downloadPageLink)}/>

        </div>
    </div>
  )
}

export default DownloadFile