import React from 'react';
import welcome from 'assets/welcome.png';
import SubHeading from './SubHeading';

const Hero = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 py-[4rem] px-[2rem] ml:px-[4rem] mxl:px-[6rem]"
      id="Home"
    >
      <div className="app__wrapper_info flex flex-col justify-center pr-4">
        <SubHeading
          title={<h1 className="sub-title">Chase the new flavour</h1>}
        />
        <h1 className="golden-title uppercase font-bold normal-font text-[70px] mm:text-[90px] tracking-[.04em] mr-5">
          The Key To Fine Dining
        </h1>
        <p
          className="p__opensans text-[#aaa] 3xl:text-[30px] leading-[50px]"
          style={{ margin: '2rem 0' }}
        >
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{' '}
        </p>
        <div>
          <button type="button" className="custom__button">
            Explore Menu
          </button>
        </div>
      </div>
      <div className="imgBx mt-10 lg:mt-0">
        <img src={welcome} className="w-full lg:w-[80%]" alt="" />
      </div>
    </div>
  );
};

export default Hero;
