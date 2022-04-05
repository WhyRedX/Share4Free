import { IFile } from 'libs/types'
import React, { FunctionComponent } from 'react'

const RenderFile:FunctionComponent<{file:IFile}>= ({file :{name, sizeInBytes, format}}) => {
  return (
    <div className='flex items-center w-full p-4 my-2'>
        {/* icon */}
        {/* <img src={`/images/${format}.png`} alt="" /> */}
        <span className="mx-2">{name}</span>
        <span className="ml-auto">{sizeInBytes}</span>
    </div>
  )
}

export default RenderFile