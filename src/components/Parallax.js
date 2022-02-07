import React from 'react';
import bg from 'assets/bg.png';

const Parallax = ({ children, className, id }) => {
  return (
    <div
      id={id}
      style={{ backgroundImage: `url(${bg})` }}
      className={`${className} flex relative items-center justify-center min-h-screen bg-fixed bg-center bg-cover custom-img py-[4rem] px-[2rem] ml:px-[4rem] mxl:px-[6rem]`}
    >
      {children}
    </div>
  );
};

export default Parallax;
