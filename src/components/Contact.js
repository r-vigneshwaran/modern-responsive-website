import React from 'react';
import Parallax from './Parallax';
import findus from 'assets/findus.png';
import SubHeading from './SubHeading';
const Contact = () => {
  return (
    <Parallax id="Contact">
      {' '}
      <div className="grid grid-cols-1 mxl:grid-cols-2">
        <div className="flex flex-col">
          <SubHeading
            title={
              <p className="capitalize text-[23px] leading-[30px] font-bold tracking-[.04em] serif">
                Contact
              </p>
            }
          />
          <h1 className="mt-4 golden-title font-semibold serif text-left text-[64px] tracking-[.03em] 3xl:text-[150px] 3xl:leading-[210px]">
            Find Us
          </h1>
          <p className="mt-8 p__opensans">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <p className="my-8 text-[rgb(220,202,135)] capitalize text-[23px] leading-[30px] font-bold tracking-[.04em] serif">
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 Am - 02:00 Am</p>{' '}
          <p className="p__opensans">Sat - Sun: 10:00 Am - 03:00 Am</p>
          <div className="mt-8">
            <button className="custom__button">Visit Us</button>
          </div>
        </div>
        <div className="imgBx mt-10 lg:mt-0 lm:ml-8 flex justify-center items-center">
          <img src={findus} className="w-full lg:w-[80%]" alt="" />
        </div>
      </div>
    </Parallax>
  );
};

export default Contact;
