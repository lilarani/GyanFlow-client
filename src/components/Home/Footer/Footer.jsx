import React from 'react';
import NewsLetter from '../NewsLetter/NewsLetter';
import Button from '@/components/customs/Button';

const Footer = () => {
  return (
    <div className="">
      <NewsLetter></NewsLetter>
      <footer className="footer footer-center bg-[#06091A] pt-40 ">
        {/* <img src={footerIcon} alt="" /> */}

        <div className="flex flex-col md:flex-row items-start md:justify-between pl-4 container mx-auto text-white space-y-5">
          <div className="text-start space-y-3">
            <h3 className="text-xl font-bold ">
              <span className="text-yellow-300">A</span>bout Us
            </h3>
            <p className="text-base md:text-lg text-gray-400">
              We are a passionate team <br /> dedicated to providing the best
              <br /> services to our customers.
            </p>
          </div>
          <div className="text-start space-y-3">
            <h3 className="text-xl font-bold">
              <span className="text-yellow-300">Q</span>uick Links
            </h3>
            <ul className="text-base md:text-lg text-gray-400 md:list-disc md:ml-6">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className=" text-start space-y-3 ">
            <h3 className="font-bold text-xl">
              <span className="text-yellow-300">S</span>ubscribe
            </h3>
            <p className="text-gray-400 text-base md:text-lg">
              Subscribe to our newsletter for the <br /> latest updates.
            </p>
            <div className="flex">
              <input
                className="p-2 rounded-l-lg text-white outline-none border-gray-500 border-[1px] border-r-0"
                type="email"
                placeholder="Enter your email"
              />
              <Button text={'Subscribe'}></Button>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="w-full border-t border-gray-700 my-6"></div>
        <p className="text-gray-500 pb-7 text-center p-2 text-base md:text-lg">
          @2025 GyanFlow All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
