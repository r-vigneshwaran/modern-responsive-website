import React from 'react';
import spoon from 'assets/spoon.png';

const SubHeading = ({ title, position = 0 }) => {
  const pos = ['mr-auto', 'mx-auto', 'ml-auto'];
  const css = pos[position];
  return (
    <div className="w-fit">
      {title}
      <img src={spoon} alt="" className={`${css} mt-1`} />
    </div>
  );
};

export default SubHeading;
