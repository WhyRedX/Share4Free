import { IFile } from 'libs/types'
import React, { FunctionComponent } from 'react'

export const sizeInMb = (sizeInBytes: number): string => {
    return `${((sizeInBytes / 1024)/1024).toFixed(2)} MB`
}

const RenderFile:FunctionComponent<{file:IFile}>= ({file :{name, sizeInBytes, format}}) => {
  return (
    <div className='flex items-center w-full p-4 my-2'>
        {/* icon */}
        {/* <img src={`/images/${format}.png`} alt="" /> */}
        <span className="mx-2">{name}</span>
        <span className="ml-auto">{sizeInMb(sizeInBytes)}</span>
    </div>
  )
}

export default RenderFile