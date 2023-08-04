import React from "react";
import Rating from "react-rating";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import { useCart } from "@/context/searchContext";
import { FiShoppingBag } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import Link from "next/link";
import Button from "./Button";

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }

    return text.substring(0, maxLength - 3) + "...";
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item);
  };

  return (
    <>
      <Link
        href={`/view_product/${item._id}`}
        className="relative flex flex-col cursor-pointer"
      >
        <div className="relative z-1 group">
          <div className="h-86 w-full overflow-hidden rounded-xl border-gray-200 border">
            <img
              src={item.thumbnail}
              className="object-cover w-full group-hover:scale-125 transition duration-300  h-full"
              alt={item.title}
            />
          </div>

          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white  text-neutral-700 shadow-lg absolute top-3 right-3 z-10">
            <LuHeart />
          </div>
          <div className="absolute bottom-0 group-hover:bottom-4 inset-x-1 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <Button
              onClick={handleAddToCart}
              variant="primary"
              style={{ width: "80%" }}
            >
              <FiShoppingBag />
              <span className="ml-1">Add to cart</span>
            </Button>
          </div>
        </div>
        <div className="space-y-4 px-2.5 pt-5 pb-2.5">
          <div>
            <h2 className="text-base font-semibold transition-colors">
              {item.title}
            </h2>
            <p className="sm:text-sm text-xs  text-slate-500 dark:text-slate-400 mt-1 ">
              {truncateText(item.description, 50)}
            </p>
          </div>
          <div className="flex sm:flex-row flex-col justify-between items-start sm:items-end ">
            <div className="">
              <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                <span className="text-green-500 !leading-none">
                  ${item.price}.00
                </span>
              </div>
            </div>
            <div className="flex sm:mt-0 mt-2 items-center mb-0.5">
              <Rating
                emptySymbol={<TiStarOutline />}
                fullSymbol={<TiStarFullOutline />}
                className=" text-yellow-400"
                initialRating={item.rating}
                readonly
              />
              <span className="text-sm ml-1 text-slate-500 dark:text-slate-400">
                {item.rating}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
