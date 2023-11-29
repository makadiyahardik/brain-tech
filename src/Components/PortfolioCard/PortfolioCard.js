import React from 'react';

const PortfolioCard = ({ icon, heading, subHeadinng, index }) => {
  return (
    <div
      key={index}
      className="relative group md:max-w-[26rem] w-full portfolio-item"
    >
      <div className=" mx-auto flex flex-col justify-center items-center text-center ">
        <div className="relative ">
          <a
            className="portfolio-link group-hover:opacity-75"
            data-bs-toggle="modal"
            href="#portfolioModal1"
          >
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="w-full" src={icon} alt={heading} />
            {/* Hover effect */}
            <div className="absolute w-full h-full flex justify-center items-center  inset-0 opacity-0 hover:opacity-100 transition-all duration-300 bg-[#ffc800]">
              <div className="w-full h-full">
                <i className="fas fa-plus fa-3x" />
                hello
              </div>
            </div>
          </a>
        </div>
        <div className=" bg-white w-full p-8">
          <div className=" font-bold text-[2rem]">{heading}</div>
          <div className=" text-muted text-[#6c757d] opacity-100">
            {subHeadinng}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
