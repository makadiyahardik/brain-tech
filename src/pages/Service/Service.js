import React from 'react';

const Service = () => {
  return (
    <div className="md:px-10  px-5" id='service'>
      <div className="text-center">
        <h2 className="section-heading text-uppercase my-[3rem]">Services</h2>
        <h3 className="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>

      <div
        className="flex mt-[6rem] md:max-w-[1240px]  w-full mx-auto justify-between items-center md:flex-row flex-col md:space-x-12
       "
      >
        <div className="col-md-4 flex justify-center items-center mx-auto flex-col">
          <div className="w-[7rem] h-[7rem] bg-[#FFC800] rounded-full flex flex-col justify-center items-center">
            <img
              src="../../assets/images/Cart.svg"
              alt="cart"
              className="h-[4rem] w-[4rem]"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full mx-auto">
            {' '}
            <h4 className="my-3 ">E-Commerce</h4>
            <p className="text-muted text-[#6c757d] opacity-100 text-center flex items-center justify-center mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
        <div className="col-md-4 flex justify-center items-center mx-auto flex-col">
          <div className="w-[7rem] h-[7rem] bg-[#FFC800] rounded-full flex flex-col justify-center items-center">
            <img
              src="../../assets/images/Design.svg"
              alt="design"
              className="h-[4rem] w-[4rem]"
            />
          </div>
          <h4 className="my-3">Responsive Design</h4>
          <p className="text-muted text-[#6c757d] opacity-100 text-center flex items-center justify-center mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
        <div className="col-md-4 flex justify-center items-center mx-auto flex-col">
          <div className="w-[7rem] h-[7rem] bg-[#FFC800] rounded-full flex flex-col justify-center items-center">
            <img
              src="../../assets/images/Web.svg"
              alt="Web"
              className="h-[4rem] w-[4rem]"
            />
          </div>
          <h4 className="my-3">Web Security</h4>
          <p className="text-muted text-[#6c757d] opacity-100 text-center flex items-center justify-center mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
