import Image from 'next/image'
import React from 'react'

const CldImage = ({item, className, style, onClick}) => {
  return (
    <Image
        alt={item.name}
        src={item.src}
        height={item.height}
        width={item.width}
        className={className}
        style={style}
        onClick={onClick}
    />
  )
}

const CldImageItems = ({item, className, location, width, onClick}) => {
  return (
    <Image
        alt={item.name}
        src={item.src}
        height={item.height}
        width={item.width}
        className={className}
        style={{
          position: 'relative',
          cursor: 'pointer',
          margin: 0,
          top: location[0],
          right: location[1],
          bottom: location[2],
          left: location[3],
          width: width
        }}
        onClick={onClick}
    />
  )
}

export{
  CldImage,
  CldImageItems
}