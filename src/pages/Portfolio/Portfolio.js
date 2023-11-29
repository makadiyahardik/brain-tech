import React from 'react';
import PortfolioCard from '../../Components/PortfolioCard/PortfolioCard';

const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      icons: '../assets/images/1.jpg',
      heading: 'Threads',
      subHeadinng: 'Illustration',
    },
    {
      id: 2,
      icons: '../assets/images/2.jpg',
      heading: 'Explore',
      subHeadinng: '  Graphic Design',
    },
    {
      id: 3,
      icons: '../assets/images/3.jpg',
      heading: 'Finish',
      subHeadinng: '   Identity',
    },
    {
      id: 4,
      icons: '../assets/images/4.jpg',
      heading: 'Lines',
      subHeadinng: '   Branding',
    },

    {
      id: 5,
      icons: '../assets/images/5.jpg',
      heading: 'Southwest',
      subHeadinng: '     Website Design',
    },
    {
      id: 6,
      icons: '../assets/images/6.jpg',
      heading: 'Window',
      subHeadinng: 'Photography',
    },
  ];
  return (
    <div className=" bg-light mt-[4rem] md:p-12 p-6" id="portfolio">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Portfolio</h2>
        <h3 className="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>

      <div className="w-full md:max-w-[1240xp] mt-[2rem]  flex-col flex justify-center items-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-y-12">
          {portfolioData?.map((item, index) => {
            return (
              <PortfolioCard
                icon={item.icons}
                heading={item.heading}
                subHeadinng={item.subHeadinng}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
