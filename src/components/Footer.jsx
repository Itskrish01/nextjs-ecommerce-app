import React from "react";

const Footer = () => {
  return (
    <>
      <div className="sm:p-10 p-4 mt-20 bg-gray-200/60 rounded-lg md:gap-44 flex-wrap flex items-center justify-between">
        <div className="md:flex-[0.6]">
          <h5 className="text-gray-600 tracking-[5px] text-xs sm:text-sm font-semibold">
            GET FIRST UPDATE
          </h5>
          <h2 className="md:text-3xl text-xl font-bold md:leading-[46px] mt-1 sm:mt-3 ">
            Get the news in front line by{" "}
            <span className="text-green-700">subscribe✍🏻</span> our latest
            updates
          </h2>
        </div>
        <div className="flex md:flex-[0.6] md:mt-0 mt-5 items-center gap-4">
          <input
            type="text"
            className=" px-4 py-3 rounded-md border border-gray-300 w-full"
            placeholder="your email"
            name=""
            id=""
          />
          <button className="bg-green-700 text-white px-4 py-3 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
      <footer className="mt-10">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <h3 className={`text-3xl font-bold text-green-700`}>Buletin</h3>
            <ul className="flex flex-wrap items-center mb-6 text-sm sm:mt-0 mt-5 font-medium  sm:mb-0 ">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <span className="block text-sm  sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Buletin
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
