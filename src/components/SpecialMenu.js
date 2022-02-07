import React from 'react';
import SubHeading from './SubHeading';
import menu from 'assets/menu.png';
import { cocktails, wines } from 'data/data';

const SpecialMenu = () => {
  const Item = ({ title, price, tag }) => {
    return (
      <div id="Menu" className="menuitem flex flex-col w-full my-4">
        <div className="itemhead flex flex-row justify-between items-center">
          <div className="itemname flex-1">
            <p className="text-[rgb(220,202,135)] capitalize text-[23px] leading-[30px] font-bold tracking-[.04em] serif">
              {title}
            </p>
          </div>
          <div className="itemdash bg-primary h-[1px] mx-[1rem] w-[90px]"></div>
          <div className="itemprice capitalize text-white text-[23px] leading-7 font-bold tracking-primary serif font-feature-setting">
            {price}
          </div>
        </div>
        <div className="flex flex-row">
          <p className="font-sans text-[16px] font-normal leading-7 tracking-primary text-[#aaa] capitalize">
            {tag}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="h-auto bg-black py-16 px-8 mxl:px-24">
      <div className="flex flex-col justify-center items-center">
        <SubHeading
          title={<h1 className="sub-title "> Menu That Fits You Palatte</h1>}
          position={1}
        />
        <h1 className="mt-4 golden-title font-semibold serif text-center text-[64px] tracking-[.03em] 3xl:text-[150px] 3xl:leading-[210px]">
          Today's Special
        </h1>
      </div>
      <div className="flex flex-col mxl:flex-row justify-center mt-16">
        <div className="items flex-1 space-y-8">
          <h1 className="serif font-semibold text-[45px] leading-[130%] text-center capitalize font-feature-setting">
            Wine & Beer
          </h1>
          {wines.map(({ title, price, tags }, idx) => (
            <Item key={idx} title={title} price={price} tag={tags} />
          ))}
        </div>
        <div className="imgBx w-auto mxl:min-w-[350px] mxl:max-w-[560px] mx-0 mxl:mx-8">
          <img src={menu} className="w-auto " alt="" />
        </div>
        <div className="items flex-1 space-y-8">
          <h1 className="serif font-semibold text-[45px] leading-[130%] text-center capitalize font-feature-setting">
            Cocktails
          </h1>
          {cocktails.map(({ title, price, tags }, idx) => (
            <Item key={idx} title={title} price={price} tag={tags} />
          ))}
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button className="custom__button">Explore</button>
      </div>
    </div>
  );
};

export default SpecialMenu;
