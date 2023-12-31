import React, { useState } from "react";
import { useRouter } from "next/router";
import { LuMenu, LuSearch, LuShoppingCart, LuUser } from "react-icons/lu";
import Link from "next/link";
import { useCart } from "@/context/cartContext";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [Show, setShow] = useState(false);
  const location = useRouter();
  const { cartItems } = useCart();

  return (
    <>
      <div className="sm:py-6 py-4 flex items-center gap-10 justify-between">
        <Link href={"/"}>
          <h3 className={`text-3xl font-bold text-green-700`}>Buletin</h3>
        </Link>
        <div>
          <ul className="hidden md:flex items-start gap-8">
            <li className="flex items-center gap-2">
              <Link href="/shop">Categories</Link>
            </li>
            <li>
              <Link href="/shop">Deals</Link>
            </li>
            <li>
              <Link href="/shop">Whats's new</Link>
            </li>
            <li>
              <Link href="/shop">Devliery</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 font-medium">
            <LuUser size={18} />
            <p className="text-sm">Account</p>
          </div>
          <Link
            href={"/cart"}
            className="hidden md:flex items-center gap-2 font-medium relative"
          >
            <LuShoppingCart size={18} />

            <div className="absolute -top-2 -right-2 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
              {cartItems.length}
            </div>
          </Link>
        </div>
        <motion.div
          initial={false}
          animate={{ translateY: Show ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          className="menu-icon md:hidden block cursor-pointer"
          onClick={() => setShow(true)}
        >
          <motion.div
            className="bar"
            initial={false}
            animate={{ rotate: Show ? 45 : 0, translateY: Show ? 18 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="bar"
            initial={false}
            animate={{ opacity: Show ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="bar"
            initial={false}
            animate={{ rotate: Show ? -45 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
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
              <div className="flex flex-col w-80 bg-white overflow-hidden">
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
                    <Link
                      href="/shop"
                      className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                    >
                      <span className="text-sm font-medium text-lightblack">
                        Deals
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop"
                      className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                    >
                      <span className="text-sm font-medium text-lightblack">
                        What's new
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop"
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
                      href={"/cart"}
                      className="cursor-pointer flex flex-row items-center h-12 text-gray-500 hover:text-gray-800"
                    >
                      <div className="flex items-center gap-2 font-medium relative">
                        <LuShoppingCart size={18} />
                        Cart
                        <div className="absolute -top-2 -right-2 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                          {cartItems.length}
                        </div>
                      </div>
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
