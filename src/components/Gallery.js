import React from 'react';
import SubHeading from './SubHeading';
import galleryTwo from 'assets/gallery02.png';
import galleryOne from 'assets/gallery01.png';
import galleryThree from 'assets/gallery03.png';
import galleryFour from 'assets/gallery04.png';
import { SiInstagram } from 'react-icons/si';
import { awards } from 'data/data';

const Gallery = () => {
  const Image = ({ imgProp }) => {
    return (
      <div className="image flex justify-center items-center h-[447px] mr-[2rem] cursor-pointer min-w-[301px] relative">
        <img
          src={imgProp}
          className="object-cover h-full transition-[.5s_ease] w-full opacity-100 hover:opacity-30"
          alt=""
        />
        <SiInstagram className="text-[#fff] cursor-pointer text-[2rem] opacity-50 hover:opacity-100 pointer-events-none absolute transition-[.5s_ease]" />
      </div>
    );
  };
  return (
    <div className="py-[4rem] pr-[0px] pl-[2rem] ml:pl-[4rem] ms:pl-[6rem] bg-black flex justify-center items-center flex-col lg:flex-row">
      <div className="content items-start flex flex-1 flex-col lg:min-w-[500px] pr-[2rem]">
        <SubHeading
          title={
            <p className="capitalize text-[23px] leading-[30px] font-bold tracking-[.04em] serif">
              Instagram
            </p>
          }
        />
        <h1 className="mt-4 golden-title font-semibold serif text-left text-[64px] tracking-[.03em] 3xl:text-[150px] 3xl:leading-[210px]">
          Photo Gallery
        </h1>
        <p className="mt-8 p__opensans text-[#aaa]">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button className="custom__button bg-[#f5efdb] mt-4">View More</button>
      </div>
      <div className="images flex flex-row w-full lg:max-w-[50%] mt-8 lg:mt-0 relative flex-1">
        <div className="imgContainer flex flex-row overflow-x-scroll w-max">
          <Image imgProp={galleryTwo} />
          <Image imgProp={galleryOne} />
          <Image imgProp={galleryThree} />
          <Image imgProp={galleryFour} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
