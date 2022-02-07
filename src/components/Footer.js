import React from 'react';
import Parallax from './Parallax';
import SubHeading from './SubHeading';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import gericht from 'assets/gericht.png';
import bg from 'assets/bg.png';

const Footer = () => {
  const FooterOverlay = () => {
    return (
      <div className="app__footerOverlay flex flex-col h-full absolute w-full -z-10">
        <div className="app__footerOverlay-black bg-black h-[25%]" />
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="app__footerOverlay-img app__bg bg-fixed bg-cover bg-repeat bg-center h-[75%]"
        />
      </div>
    );
  };
  const Newsletter = () => {
    return (
      <div className="app__newsletter w-[inherit] bg-black border-[1px] border-primary py-[2rem] px-[1rem] ml:px-[4rem]">
        <div className="app__newsletter-heading text-center flex flex-col items-center">
          <SubHeading
            title={
              <p className="capitalize text-[23px] leading-[30px] font-bold tracking-[.04em] serif">
                Newsletter
              </p>
            }
          />
          <h1 className="mt-4 golden-title font-semibold serif text-left text-[64px] tracking-[.03em] 3xl:text-[150px] 3xl:leading-[210px]">
            Subscribe To Our Newsletter
          </h1>
          <p className="p__opensans">And never miss latest Updates!</p>
        </div>
        <div className="app__newsletter-input flex justify-center items-center flex-col mx:flex-row mt-[3rem]">
          <input
            type="email"
            placeholder="Enter your email address"
            className=" bg-black border-[1px] border-primary rounded-[5px] text-white serif text-[1rem] mx:mr-[2rem] py-[0.75rem] px-[1rem] w-full mx:w-[620px]"
          />
          <button type="button" className="custom__button mt-4 mx:mt-0">
            Subscribe
          </button>
        </div>
      </div>
    );
  };
  return (
    <div
      className="app__footer section__padding py-[4rem] px-[2rem] ml:px-[4rem] ms:px-[6rem] items-center bg-black flex flex-col justify-start relative w-full z-10"
      id="login"
    >
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links items-center lg:items-start flex flex-col lg:flex-row w-full px-[2rem] justify-between mt-[5rem]">
        <div className="app__footer-links_contact text-center m-[1rem] flex-1">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
        <div className="app__footer-links_logo text-center m-[1rem] flex-1 flex flex-col items-center">
          <img src={gericht} alt="footer_logo" />
          <SubHeading
            title={
              <p className="p__opensans">
                &quot;The best way to find yourself is to lose yourself in the
                service of others.&quot;
              </p>
            }
            position={1}
          />
          <div className="app__footer-links_icons text-center flex space-x-3 justify-center flex-row m-[1rem] flex-1">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work flex-1 flex flex-col items-center">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
      </div>
    </div>
  );
};
/*
 <div className="w-full h-full py-[4rem] px-[6rem] bg-black items-center flex justify-start pt-0 relative z-10 flex-col ">
      <div className="footerOverlay flex flex-col h-full absolute w-full -z-10">
        <div className="bg-black h-[75%]"></div>
        <Parallax className={'h-[75%]'}></Parallax>
      </div>
      <div className="newsLetter bg-black border-[1px] border-primary py-[2rem] px-[4rem]">
        <SubHeading
          title={
            <p className="capitalize text-[23px] leading-[30px] font-bold tracking-[.04em] serif">
              Contact
            </p>
          }
        />
        <h1 className="mt-4 golden-title font-semibold serif text-left text-[64px] tracking-[.03em] 3xl:text-[150px] 3xl:leading-[210px]">
          Subscribe To Our Newsletter
        </h1>
        <p className="mt-8 p__opensans">And Never Miss Latest Updates!</p>
      </div>
      <div className="footerLinks"></div>
      <div className="footerCopyrights"></div>
    </div>
*/
export default Footer;
