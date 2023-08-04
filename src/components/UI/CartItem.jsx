import { useCart } from "@/context/cartContext";
import Link from "next/link";
import React from "react";
import { LuCheck, LuMinus, LuPlus, LuX } from "react-icons/lu";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - 3) + "...";
  }
  return (
    <div
      key={item._id}
      className="relative flex py-8 sm:py-10 xl:py-6 px-4 first:pt-0 last:pb-0"
    >
      <Link
        href={`/view_product/${item._id}`}
        className="relative h-36 w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200"
      >
        <img
          src={item.thumbnail}
          alt="Rey Nylon Backpack"
          className="h-full w-full object-contain object-center"
        />
      </Link>
      <div className="ml-3 sm:ml-6 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between ">
            <div className="flex-[1.5] pr-10">
              <h3 className="sm:text-base text-sm font-semibold">
                <span>{item.title}</span>
              </h3>
              <p className="text-gray-600 sm:block hidden text-xs mt-1">
                {truncateText(item.description, 90)}
              </p>
              <div className="mt-2 text-xs">
                <span className="font-bold">brand: </span>
                {item.brand}
              </div>

              <div className="mt-3 flex justify-between w-full sm:hidden relative">
                <div className="">
                  <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full">
                    <span className="text-green-500 !leading-none">
                      ${item.price}.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col space-y-4">
              <div className="sm:space-x-8 text-center relative">
                <div className="flex items-center justify-between space-x-5 relative z-10">
                  <div className="flex items-center justify-between w-[60px] sm:w-28">
                    <button
                      className="sm:w-8 sm:h-8 h-5 w-5 rounded-full flex items-center justify-center border border-neutral-400  bg-white  focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400  disabled:opacity-50 disabled:cursor-default"
                      type="button"
                      onClick={() => decreaseQuantity(item._id)}
                    >
                      <LuMinus />
                    </button>
                    <span className="select-none block flex-1 text-center leading-none">
                      {item.quantity}
                    </span>
                    <button
                      className="sm:w-8 sm:h-8 h-5 w-5 rounded-full flex items-center justify-center border border-neutral-400  bg-white focus:outline-none hover:border-neutral-700  disabled:hover:border-neutral-400  disabled:opacity-50 disabled:cursor-default"
                      type="button"
                      onClick={() => increaseQuantity(item._id)}
                    >
                      <LuPlus />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex justify-end">
                <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                  <span className="text-green-500 !leading-none">
                    ${item.price}.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-auto pt-4 items-end justify-between text-sm">
          {item.stock > 0 ? (
            <div className="rounded-full flex text-green-500 items-center justify-center px-2.5 py-1.5 text-xs border border-slate-200 ">
              <LuCheck />
              <span className="ml-1 leading-none">In Stock</span>
            </div>
          ) : (
            <div className="rounded-full flex text-red-500 items-center justify-center px-2.5 py-1.5 text-xs border border-slate-200 ">
              <LuX />
              <span className="ml-1 leading-none">Out of Stock</span>
            </div>
          )}

          <div
            onClick={() => removeFromCart(item._id)}
            className="relative cursor-pointer font-semibold hover:text-red-500 z-10 flex items-center mt-3 text-primary-6000 hover:text-primary-500 text-sm "
          >
            <span>Remove</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
