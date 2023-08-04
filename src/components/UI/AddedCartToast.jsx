import Link from "next/link";
import React from "react";

const AddedCartToast = ({ t, item }) => {
  return (
    <div
      className={`${
        t.visible
          ? "animate-in fade-in-10  slide-in-from-right-5 duration-300"
          : ""
      } p-4 w-full max-w-md bg-white shadow-lg rounded-2xl pointer-events-auto ring-1 ring-black/5  text-slate-900 opacity-100`}
    >
      <p className="block text-base font-semibold leading-none">
        Added to cart!
      </p>
      <div className="border-t border-slate-200  my-4"></div>
      <div className="flex ">
        <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <img
            src={item.thumbnail}
            alt="Manhattan Toy WRT"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-base font-medium ">{item.title}</h3>
              </div>
              <div className="mt-0.5">
                <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                  <span className="text-green-500 !leading-none">
                    ${item.price}.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <div className="mt-2 text-base">
              <span className="font-bold">brand: </span>
              {item.brand}
            </div>
            <div className="flex">
              <Link
                className="font-medium text-primary-6000 dark:text-primary-500 "
                href="/cart"
              >
                View cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedCartToast;
