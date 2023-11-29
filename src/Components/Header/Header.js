import React, { useState, useEffect } from 'react';
import { Link as LinkScroll } from 'react-scroll';
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
            'fixed top-0 md:w-full md:py-[30px] py-[20px]  transition-all ' +
            (scrollActive ? ' z-[1000] md:shadow-md bg-black' : ' pt-4')
          }
        >
          <div className="md:max-w-[1400px] w-full bg-transperent  md:px-10 px-5 mx-auto ">
            <div className="flex  justify-between  md:items-center  ">
              <div className="flex justify-start items-center ">
                <img
                  src="../assets/images/navbar-logo.svg"
                  className="h-[2rem] w-auto "
                  alt="logo"
                />
              </div>
              <div className=" md:flex hidden navLink  text-[#fff] -tracking-tighter">
                <div className="    cursor-pointer">
                  <LinkScroll
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={() => {
                      setActiveLink('SERVICES');
                    }}
                    className={
                      'px-4 py-2 Workcursor-pointer animation-hover inline-block relative no-underline no-underline ' +
                      (activeLink === 'SERVICES'
                        ? 'text-[#F8C311] animation-active'
                        : 'text-white')
                    }
                  >
                    SERVICES
                  </LinkScroll>
                </div>

                <div className="text-[1rem] font-medium leading-[20px] text-white mx-4 cursor-pointer">
                  <LinkScroll
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={() => {
                      setActiveLink('PORTFOLIO');
                    }}
                    className={
                      'px-4 py-2 Workcursor-pointer animation-hover inline-block relative no-underline' +
                      (activeLink === 'PORTFOLIO'
                        ? ' text-[#F8C311] animation-active '
                        : ' text-white')
                    }
                  >
                    PORTFOLIO
                  </LinkScroll>
                </div>
                <div className="text-[1rem] font-medium leading-[20px] text-white mx-4 cursor-pointer">
                  <LinkScroll
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink('ABOUT');
                    }}
                    className={
                      'px-4 py-2 Workcursor-pointer animation-hover inline-block relative no-underline' +
                      (activeLink === 'ABOUT'
                        ? ' text-[#F8C311] animation-active '
                        : ' text-white')
                    }
                  >
                    ABOUT
                  </LinkScroll>
                </div>

                <div className="text-[1rem] font-medium leading-[20px] text-white mx-4 cursor-pointer">
                  <LinkScroll
                    activeClass="active"
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={() => {
                      setActiveLink('TEAM');
                    }}
                    className={
                      'px-4 py-2 Workcursor-pointer animation-hover inline-block relative no-underline' +
                      (activeLink === 'TEAM'
                        ? ' text-[#F8C311] animation-active '
                        : ' text-white')
                    }
                  >
                    TEAM
                  </LinkScroll>
                </div>

                <div className="text-[1rem] font-medium leading-[20px] text-white mx-4 cursor-pointer">
                  <LinkScroll
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink('CONTACT');
                    }}
                    className={
                      'px-4 py-2 Workcursor-pointer animation-hover inline-block relative no-underline' +
                      (activeLink === 'CONTACT'
                        ? ' text-[#F8C311] animation-active '
                        : ' text-white')
                    }
                  >
                    CONTACT
                  </LinkScroll>
                </div>
              </div>

              <div className="md:hidden flex mx-4 " onClick={onMoboClicks}>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  Menu
                  <i className="fas fa-bars ms-1" />
                </button>
              </div>

              <div
                className={
                  showNav
                    ? 'fixed top-[4rem] left-0 bg-black w-full ease-in-out duration-500 z-[1000]'
                    : 'fixed top-[-100%]'
                }
              >
                <ul className="md:hidden flex navLink text-white p-5  flex-col mx-auto justify-center items-center">
                  <li className="my-2 text-[1rem] font-medium leading-[20px] text-white ">
                    {' '}
                    <LinkScroll
                      activeClass="active"
                      to="SERVICES"
                      spy={true}
                      offset={-100}
                      smooth={true}
                      duration={500}
                      onSetActive={() => {
                        setActiveLink('SERVICES');
                      }}
                      className={
                        'px-4 py-2 Workcursor-pointer animation-hover inline-block relative no-underline' +
                        (activeLink === 'SERVICES'
                          ? ' text-[#F8C311] animation-active '
                          : ' text-white')
                      }
                    >
                      SERVICES
                    </LinkScroll>
                  </li>
                  <li className="my-2 text-[1rem] font-medium leading-[20px] text-white">
                    {' '}
                    <LinkScroll
                      activeClass="active"
                      to="PORTFOLIO"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      onSetActive={() => {
                        setActiveLink('PORTFOLIO');
                        setShowNav(false);
                      }}
                      className={
                        'px-4 py-2 Workcursor-pointer animation-hover inline-block relative no-underline' +
                        (activeLink === 'PORTFOLIO'
                          ? ' text-[#F8C311] animation-active '
                          : ' text-white')
                      }
                    >
                      PORTFOLIO
                    </LinkScroll>
                  </li>
                  <li className="my-2 text-[1rem] font-medium leading-[20px] text-white">
                    {' '}
                    <LinkScroll
                      activeClass="active"
                      to="ABOUT"
                      offset={-100}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onSetActive={() => {
                        setActiveLink('ABOUT');
                        setShowNav(false);
                      }}
                      className={
                        'px-4 py-2 Work cursor-pointer animation-hover inline-block relative no-underline' +
                        (activeLink === 'ABOUT'
                          ? ' text-[#F8C311] animation-active '
                          : ' text-white')
                      }
                    >
                      ABOUT
                    </LinkScroll>
                  </li>
                  <li
                    className="my-2 le
                ading-[30px] text-[1rem] font-semibold"
                  >
                    {' '}
                    <LinkScroll
                      activeClass="active"
                      to="TEAM"
                      offset={-100}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onSetActive={() => {
                        setActiveLink('TEAM');
                        setShowNav(false);
                      }}
                      className={
                        'px-4 py-2 Work cursor-pointer animation-hover inline-block relative no-underline' +
                        (activeLink === 'TEAM'
                          ? ' text-[#F8C311] animation-active '
                          : ' text-white')
                      }
                    >
                      TEAM
                    </LinkScroll>
                  </li>
                  <li
                    className="my-2 le
                ading-[30px] text-[1rem] font-semibold"
                  >
                    {' '}
                    <LinkScroll
                      activeClass="active"
                      to="conatct"
                      offset={-100}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onSetActive={() => {
                        setActiveLink('CONTACT');
                        setShowNav(false);
                      }}
                      className={
                        'px-4 py-2 Work cursor-pointer animation-hover inline-block relative no-underline'  +
                        (activeLink === 'CONTACT'
                          ? ' text-[#F8C311] animation-active '
                          : ' text-white')
                      }
                    >
                      CONTACT
                    </LinkScroll>
                  </li>
                </ul>
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
