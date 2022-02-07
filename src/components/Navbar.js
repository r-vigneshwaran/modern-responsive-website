import React, { useState } from 'react';
import gericht from 'assets/gericht.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Menu' },
    { id: 4, name: 'Awards' },
    { id: 5, name: 'Contact' }
  ];
  return (
    <div className="w-full bg-transparent py-4 px-4 ml:px-8">
      <div className="flex flex-row justify-between items-center ">
        <div className="logo">
          <img src={gericht} className="object-cover w-[150px]" alt="" />
        </div>
        <ul className="item flex-row text-white space-x-[32px] font-sans text-base leading-7 tracking-[.04em] hidden lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              {' '}
              <a href={`#${item.name}`} onClick={() => setOpen(!open)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="btns flex-row items-center hidden ml:flex pr-8">
          <a className="hover:border-b-[1px]" href="">
            Log In / Register
          </a>
          <div className="border-r-[0.1px] h-8 mx-4 border-gray-300"></div>
          <a className="hover:border-b-[1px]" href="">
            Book Table
          </a>
        </div>
        <div className="app__navbar-smallscreen lg:hidden">
          {!open && (
            <GiHamburgerMenu size={20} onClick={() => setOpen(!open)} />
          )}
          {open && (
            <div className="bg-black lg:hidden fixed top-0 left-0 w-full h-screen transition-[.05s_ease] flex flex-col z-10 justify-center items-center slide-bottom">
              <MdOutlineRestaurantMenu
                size={27}
                className="overlay__close fixed right-5 top-5"
                onClick={() => setOpen(!open)}
              />
              <ul className="app__navbar-smallscreen_links list-none ">
                {navItems.map((item) => (
                  <li className="nav-items" key={item.id}>
                    <a href={`#${item.name}`} onClick={() => setOpen(!open)}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
