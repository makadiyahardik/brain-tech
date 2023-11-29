import React from 'react'
import SocialMediaIcon from '../SocialMediaIcon/SocialMediaIcon'

const Footer = () => {
  return (
    <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-start">
          Copyright © Your Website 2023
        </div>
        <div className="col-lg-4 my-3 my-lg-0">
         

          <SocialMediaIcon label="Twitter" className="fab fa-twitter"/>


          <SocialMediaIcon label="Facebook" className="fab fa-facebook-f"/>

       
          <SocialMediaIcon label="LinkedIn" className="fab fa-linkedin-in"/>

        </div>
        <div className="col-lg-4 text-lg-end">
          <a className="link-dark text-decoration-none me-3" href="#!">
            Privacy Policy
          </a>
          <a className="link-dark text-decoration-none" href="#!">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
