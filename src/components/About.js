import React from 'react';
import G from 'assets/G.png';
import knife from 'assets/knife.png';
import SubHeading from './SubHeading';
import Parallax from './Parallax';

const About = () => {
  return (
    <Parallax id="About">
      <div className="imgbx absolute inset-0 flex justify-center items-center -z-1">
        <img src={G} className="w-[391px]" alt="" />
      </div>
      <div className="flex flex-col mxl:flex-row justify-center items-center z-10">
        <div className="about-us flex flex-col justify-center items-end space-y-8">
          <SubHeading
            title={
              <h1 className="golden-title uppercase font-bold serif text-right text-[64px] tracking-[.03em] 3xl:text-[150px] 3xl:leading-[210px]">
                About Us
              </h1>
            }
            position={2}
          />
          <p className="p__opensans text-[#aaa]">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button type="button" className="custom__button mt-2">
            Explore Menu
          </button>
        </div>
        <div className="knife my-16 mxl:my-8 mx-0 mxl:mx-16">
          <img
            src={knife}
            alt=""
            className="object-cover w-36 mxl:w-64 h-full"
          />
        </div>
        <div className="history flex flex-col justify-center items-start space-y-8">
          <SubHeading
            title={
              <h1 className="golden-title uppercase font-bold text-left serif text-[64px] tracking-[.04em] 3xl:text-[150px] 3xl:leading-[210px]">
                Our History
              </h1>
            }
          />
          <p className="p__opensans text-[#aaa]">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button type="button" className="custom__button mt-2">
            Explore Menu
          </button>
        </div>
      </div>
    </Parallax>
  );
};

export default About;
