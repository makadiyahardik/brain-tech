import React from 'react'

const SocialMediaIcon = ({label,className}) => {
  return (
    <a
    className="btn btn-dark btn-social mx-2"
    href="#!"
    aria-label={label}
  >
    <i className={className} />
  </a>
  )
}

export default SocialMediaIcon