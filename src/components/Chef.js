import React from 'react';
import Parallax from './Parallax';
import chef from 'assets/chef.png';
import sign from 'assets/sign.png';
import quote from 'assets/quote.png';
import SubHeading from './SubHeading';

const Chef = () => {
  return (
    <Parallax>
      <div className="grid grid-cols-1 mm:grid-cols-2">
        <div className="img flex justify-start items-center mm:mx-8">
          <img src={chef} className="w-full object-cover mm:w-[80%]" alt="" />
        </div>
        <div className="content flex flex-col items-start justify-center mt-10 space-y-10">
          <SubHeading
            title={
              <p className="capitalize text-[23px] leading-[30px] font-bold tracking-[.04em] serif">
                Chef's Word
              </p>
            }
          />
          <h1 className="mt-4 golden-title font-semibold serif text-left text-[64px] tracking-[.03em] 3xl:text-[150px] 3xl:leading-[210px]">
            What We Believe In
          </h1>
          <div className="flex flex-col pt-7 mm:pt-14">
            <div className="flex flex-row">
              <img
                src={quote}
                className="h-[40px] mr-[1rem] mb-[1rem] w-[47px]"
                alt=""
              />
              <p className="p__opensans">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor
                Sit .
              </p>
            </div>
            <p className="p__opensans">
              Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
              Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
              Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
              Nunc.
            </p>
          </div>
          <div className="flex flex-col">
            <small className="text-primary serif font-normal tracking-primary leading-10 capitalize">
              Kevin Luo
            </small>
            <p>Chef & Founder</p>
          </div>
          <div className="signature pt-4">
            <img src={sign} alt="" />
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Chef;
