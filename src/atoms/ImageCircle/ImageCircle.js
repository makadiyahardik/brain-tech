import React from 'react'

const ImageCircle = ({src,alt,className}) => {
  return (
    <div className="timeline-image ">
    <img
      className={`rounded-circle img-fluid ${className}`}
      src={src}
      alt={alt}
    />
  </div> 
  )
}

export default ImageCircle