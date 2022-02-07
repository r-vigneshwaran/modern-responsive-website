import React from 'react';
import Parallax from './Parallax';
import SubHeading from './SubHeading';
import laurels from 'assets/laurels.png';
import { awards } from 'data/data';

const Laurels = () => {
  const Laurel = ({ imgProp, heading, desc }) => {
    return (
      <div className="flex flex-row min-w-[230px]">
        <img src={imgProp} className="w-[50px] h-[50px]" alt="" />
        <div className="flex flex-col ml-[1rem]">
          <p className="text-[rgb(220,202,135)] capitalize text-[23px] leading-[30px] font-bold tracking-[.04em] serif">
            {heading}
          </p>
          <p className=" capitalize text-[23px] leading-[30px] font-bold tracking-[.04em] serif">
            {desc}
          </p>
        </div>
      </div>
    );
  };
  return (
    <Parallax id="Awards">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col">
          <SubHeading
            title={
              <p className="capitalize text-[23px] leading-[30px] font-bold tracking-[.04em] serif">
                Awards & Recognition
              </p>
            }
          />
          <h1 className="mt-4 golden-title font-semibold serif text-left text-[64px] tracking-[.03em] 3xl:text-[150px] 3xl:leading-[210px]">
            Our Laurels
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mx:grid-cols-3 lg:grid-cols-2 gap-8 mt-10">
            {awards.map((item, idx) => (
              <Laurel
                key={idx}
                imgProp={item.imgUrl}
                heading={item.title}
                desc={item.subtitle}
              />
            ))}
          </div>
        </div>
        <div className="imgBx mt-10 lg:mt-0 lm:ml-8 flex justify-center items-center">
          <img src={laurels} className="w-full lg:w-[80%]" alt="" />
        </div>
      </div>
    </Parallax>
  );
};

export default Laurels;
