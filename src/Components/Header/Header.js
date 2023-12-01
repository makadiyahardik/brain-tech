import React, { useState, useEffect } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import navLinks from "../../router/Navigation"
import Button from '../../atoms/Button/Button';
const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const onMoboClicks = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div
          className={
            'fixed top-0 md:w-full md:py-[30px] flex justify-between py-[20px] w-full px-2  transition-all ' +
            (scrollActive ? ' z-[1000] md:shadow-md flex justify-between items-center w-full bg-black' : ' pt-4')
          }
        >
          <div className="md:max-w-[1400px] w-full bg-transperent  mx-auto ">
            <div className="flex  justify-between  items-center  ">
              <div className="flex justify-between items-center ">
                <img
                  src="../assets/images/navbar-logo.svg"
                  className="h-[2rem] w-auto "
                  alt="logo"
                />
              </div>
              <div className=" md:flex hidden navLink  text-[#fff] -tracking-tighter">
            
              {navLinks.map((item,index)=>{
                return(
                  <div className="text-[1rem] font-medium leading-[20px] text-white mx-4 cursor-pointer" key={index}>
                  <LinkScroll
                    activeClass="active"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={() => {
                      setActiveLink(item.activeLink);
                    }}
                    className={
                      'px-4 py-2 Workcursor-pointer animation-hover inline-block relative no-underline' +
                      (activeLink === item.activeLink
                        ? ' text-[#F8C311] animation-active '
                        : ' text-white')
                    }
                  >
                   {item.name}
                  </LinkScroll>
                </div>
                )
              })}
             

              
              </div>

              <div className="md:hidden flex justify-end " onClick={onMoboClicks}>
                <button
                  className="navbar-toggler"
                  type="button"
              
                >
                  Menu
                  <i className="fas fa-bars mx-1" />
                </button>
              </div>

              <div
                className={
                  showNav
                    ? 'fixed top-[4rem] left-0 bg-black w-full ease-in-out duration-500 z-[1000]'
                    : 'fixed top-[-100%]'
                }
              >
                <div className="md:hidden flex navLink text-white p-5  flex-col mx-auto justify-center items-start">

                {navLinks.map((item,index)=>{
                return(
                  <div className="text-[1rem] font-medium leading-[20px] text-white mx-4 cursor-pointer" key={index}>
                  <LinkScroll
                    activeClass="active"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={() => {
                      setActiveLink(item.activeLink);
                      setShowNav(false)
                    }}
                    className={
                      'px-4 py-2 Workcursor-pointer animation-hover inline-block relative no-underline  ' +
                      (activeLink === item.activeLink

                        ? 'text-[#F8C311] animation-active'
                        : 'text-white')
                    }
                  >
                   {item.name}
                  </LinkScroll>
                </div>
                )
              })}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Masthead*/}
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Studio!</div>
          <div className="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
      {/*  */}

      <Button/>
        </div>
      </header>
    </>
  );
};

export default Header;
