import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-20 border-t border-gray-200 pt-10 relative flex flex-col lg:flex-row items-center ">
        <div className="relative flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">
            Earn free money <br /> with Buletin
          </h2>
          <span className="block mt-6 text-slate-500 dark:text-slate-400 ">
            With Buletin you will get freeship &amp; savings combo...
          </span>
          <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
            <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900  hover:bg-slate-800 text-slate-50  shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000  ">
              Savings combo
            </button>
            <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700  hover:bg-gray-100  border border-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 ">
              Discover more
            </button>
          </div>
        </div>
        <div className="relative flex-1 max-w-xl lg:max-w-none">
          <div className="nc-NcImage block dark:hidden" data-nc-id="NcImage">
            <img
              src="./static/media/rightLargeImg.dd2356513f3941fd1981.png"
              className="object-cover w-full h-full"
              alt="nc-imgs"
            />
          </div>
          <div className="hidden dark:block" data-nc-id="NcImage">
            <div className="object-cover w-full h-full flex items-center justify-center text-neutral-100 ">
              <img
                src="/images/rightLargeImg.dd2356513f3941fd1981.png"
                className="h-2/4 max-w-[80%]"
              ></img>
            </div>
          </div>
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
