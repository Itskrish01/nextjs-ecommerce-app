import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LuMenu, LuSearch, LuUser } from "react-icons/lu";
import { HiChevronDown } from "react-icons/hi";
import Link from "next/link";
import { SearchContext } from "@/context/searchContext";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";

const Navbar = ({ fontType }) => {
  const { searchTerms, setSearchTerms, onSubmitForm } =
    useContext(SearchContext);
  const [Show, setShow] = useState(false);
  const location = useRouter();

  return (
    <>
      <div className="sm:py-6 py-4 flex items-center gap-10 justify-between">
        <Link href={"/"}>
          <h3 className={`text-3xl font-bold text-green-700`}>Buletin</h3>
        </Link>
        <div>
          <ul className="hidden md:flex items-start gap-8">
            <li className="flex items-center gap-2">
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">Deals</a>
            </li>
            <li>
              <a href="">Whats's new</a>
            </li>
            <li>
              <a href="">Devliery</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <form onSubmit={onSubmitForm} className="md:w-2/3 relative">
            <input
              className="bg-gray-100 appearance-none border-2 border-gray-100 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700"
              id="inline-full-name"
              type="text"
              placeholder="Search News..."
              onChange={(e) => setSearchTerms(e.target.value)}
              value={searchTerms}
            />
            <LuSearch className="absolute top-[11px] text-gray-600 right-3" />
          </form>
          <div className="flex items-center gap-2 font-medium">
            <LuUser size={18} />
            <p className="text-sm">Account</p>
          </div>
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div
          onClick={() => setShow(true)}
          className="text-xl border md:hidden block border-gray-600 p-1 rounded cursor-pointer"
        >
          <LuMenu />
        </div>
      </div>
      <AnimatePresence>
        {Show && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween" }}
              onClick={() => setShow(false)}
              className="bg-black md:hidden flex opacity-30 fixed top-0 z-[99999] left-0 right-0 bottom-0 w-full"
            ></motion.div>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "tween", ease: [0.9, 0.1, 0.4, 1] }}
              className="min-h-screen md:hidden flex fixed top-0 z-[100000] left-0 flex-row bg-gray-100"
            >
              <div className="flex flex-col w-66 bg-white overflow-hidden">
                <div className="flex items-center justify-between px-6 h-14 shadow-md">
                  <Link href={"/"}>
                    <h3 className={`text-3xl font-bold text-green-700`}>
                      Buletin
                    </h3>
                  </Link>
                  <CgClose
                    size={20}
                    onClick={() => setShow(false)}
                    className="cursor-pointer"
                  />
                </div>
                <ul className="flex flex-col py-6 px-5 list-none">
                  <li>
                    <form onSubmit={onSubmitForm} className=" relative">
                      <input
                        className="bg-gray-100 appearance-none border-2 mb-2 border-gray-100 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700"
                        id="inline-full-name"
                        type="text"
                        placeholder="Search News..."
                        onChange={(e) => setSearchTerms(e.target.value)}
                        value={searchTerms}
                      />
                      <LuSearch className="absolute top-[11px] text-gray-600 right-3" />
                    </form>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="flex flex-row items-center h-12 text-gray-500 hover:text-gray-800"
                    >
                      <span className={` text-sm font-medium text-lightblack`}>
                        Categories
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                    >
                      <span className="text-sm font-medium text-lightblack">
                        Deals
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                    >
                      <span className="text-sm font-medium text-lightblack">
                        What's new
                      </span>
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="flex flex-row items-center h-12 text-gray-500 hover:text-gray-800"
                    >
                      <span
                        className={`${
                          location.pathname === "/blog" ? "opacity-50" : ""
                        } text-sm font-medium text-lightblack`}
                      >
                        Delivery
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about"
                      className="flex flex-row items-center h-12 text-gray-500 hover:text-gray-800"
                    >
                      <span
                        className={`${
                          location.pathname === "/about" ? "opacity-50" : ""
                        } text-sm font-medium text-lightblack`}
                      >
                        Account
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
