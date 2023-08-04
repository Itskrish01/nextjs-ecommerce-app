import Layout from "@/components/layoutComps/Layout";
import useSearchResults from "@/hooks/useSearchResults";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { PiStarFill } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaExchangeAlt } from "react-icons/fa";
import React, { useState } from "react";
import { LuCheckCircle2, LuMinus, LuPlus } from "react-icons/lu";
import { useEffect } from "react";
import Loader from "@/components/reusableComponents/Loader";
import Button from "@/components/UI/Button";
import { useCart } from "@/context/searchContext";
import toast from "react-hot-toast";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import Rating from "react-rating";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const viewProduct = () => {
  const router = useRouter();
  const { addToCart, cartItems, increaseQuantity, decreaseQuantity } =
    useCart();
  const { data, isLoading, isError } = useSearchResults(router.query.id);
  const isItemInCart = cartItems.some((item) => item._id === data?._id);
  const currentItemCart = cartItems.find((item) => item._id === data?._id);
  const [variant, setActiveVariant] = useState();
  const [activeVariantImageIndex, setActiveVariantImageIndex] = useState(0);

  useEffect(() => {
    if (!variant && data) {
      setActiveVariant(data?.variants[0]);
    }
  }, [data]);

  useEffect(() => {
    if (variant) {
      setActiveVariantImageIndex(0);
    }
  }, [variant]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (data.stock === 0) {
      toast.error("This item is currently unavailable to purchase.");
      return;
    }

    addToCart(data);
  };

  const discountAmount = (data?.price * data?.discountPercentage) / 100;
  const discountedPrice = data?.price - discountAmount;

  return (
    <>
      <Head>
        <title>
          {data?.title} ({variant?.variant_name})
        </title>
      </Head>
      <main className={poppins.className}>
        <Layout>
          {isLoading ? (
            <div className="w-full mt-10 h-[50vh] flex justify-center items-center">
              <Loader />
            </div>
          ) : isError ? (
            <div className="w-full mt-10 h-[20vh] flex justify-center items-center">
              <h5 className="text-green-700 text-xl font-semibold">
                Some error occurred, Please try again later...
              </h5>
            </div>
          ) : (
            <section className="pt-12 pb-24 rounded-b-10xl overflow-hidden">
              <div className="container mx-auto">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
                    <div className="flex flex-col items-center justify-between lg:justify-start lg:items-start xl:items-center">
                      <div className="flex items-center overflow-hidden justify-center">
                        <img
                          className="mb-5 rounded-lg"
                          height={100}
                          src={variant?.variant_images[activeVariantImageIndex]}
                          alt="image"
                        />
                      </div>
                      <div className="w-full sm:w-auto min-w-max gap-2 sm:gap-5 mt-3 text-center flex items-center justify-center">
                        {variant?.variant_images.map((item, index) => (
                          <div
                            key={index}
                            className={`sm:h-[7.2rem] h-[5rem] border border-gray-400 cursor-pointer rounded-lg overflow-hidden block mb-4 mr-2 sm:mr-0 ${
                              index === activeVariantImageIndex
                                ? "opacity-60"
                                : ""
                            }`}
                            onMouseEnter={() =>
                              setActiveVariantImageIndex(index)
                            }
                          >
                            <img className="h-full w-full" src={item} alt="" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-[45%] sm:pt-10 lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10">
                    <div className="space-y-7 2xl:space-y-8">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold">
                          {data?.title} ({variant?.variant_name})
                        </h2>
                        <div className="pt-3 last:pb-0 text-slate-600 text-sm  leading-6">
                          {data?.description}
                        </div>
                        <div className=" mt-5">
                          <div className="flex gap-2 items-center">
                            {data?.discountPercentage && (
                              <div
                                className={`flex items-center rounded-lg text-xl  font-semibold`}
                              >
                                ${Math.floor(discountedPrice)}.00
                              </div>
                            )}
                            <div
                              className={`${
                                data?.discountPercentage
                                  ? "line-through opacity-60 text-sm"
                                  : "text-lg"
                              } flex items-center rounded-lg  font-semibold`}
                            >
                              ${data?.price}.00
                            </div>

                            <span className="text-red-500 text-sm">
                              ({Math.floor(data?.discountPercentage)})% OFF
                            </span>
                          </div>

                          <div className="flex mt-2 items-center">
                            <Rating
                              emptySymbol={<TiStarOutline />}
                              fullSymbol={<TiStarFullOutline />}
                              className=" text-yellow-400 text-2xl"
                              initialRating={data?.rating}
                              readonly
                            />
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <div>
                          <div className="flex justify-between font-medium text-sm">
                            <label htmlFor="">
                              <span className="">
                                Variant:
                                <span className="ml-1 font-semibold">
                                  {variant?.variant_name.toUpperCase()}
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mt-3">
                            {data?.variants.map((item) => {
                              return (
                                <div
                                  onClick={() => setActiveVariant(item)}
                                  style={{
                                    backgroundColor: item?.variant_color,
                                  }}
                                  className={` relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                      text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 cursor-pointer border-slate-300 text-slate-900 hover:bg-neutral-50`}
                                >
                                  {item._id === variant?._id ? (
                                    <>
                                      <div className="absolute w-full h-full rounded-2xl bg-black opacity-50"></div>
                                      <LuCheckCircle2 className="text-green-300 brightness-100 text-3xl" />
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3.5">
                        <div className=" flex items-center gap-10 mb-10">
                          {isItemInCart && (
                            <div className="flex items-center justify-center bg-slate-100/70 px-2 py-3 sm:p-3.5 rounded-full">
                              <div className="flex items-center justify-between space-x-5 w-full">
                                <div className="flex items-center justify-between w-[104px] sm:w-28">
                                  <div
                                    onClick={() => decreaseQuantity(data?._id)}
                                    className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400  bg-white  focus:outline-none hover:border-neutral-700  disabled:hover:border-neutral-400  disabled:opacity-50 disabled:cursor-default"
                                  >
                                    <LuMinus />
                                  </div>
                                  <span className="select-none block flex-1 text-center leading-none">
                                    {currentItemCart?.quantity}
                                  </span>
                                  <div
                                    onClick={() => increaseQuantity(data._id)}
                                    className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400  bg-white  focus:outline-none hover:border-neutral-700  disabled:hover:border-neutral-400  disabled:opacity-50 disabled:cursor-default"
                                  >
                                    <LuPlus />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {data?.stock === 0 ? (
                            <div className="font-semibold text-red-500">
                              Current Unavailable
                            </div>
                          ) : (
                            <div className="font-semibold text-stone-700">
                              Only{" "}
                              <span className="font-bold text-orange-300">
                                {data?.stock}
                              </span>{" "}
                              items are left!
                              <br />
                              Dont miss it!
                            </div>
                          )}
                        </div>
                        <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-10 w-full">
                          <Button
                            onClick={handleAddToCart}
                            variant="primary"
                            disabled={isItemInCart || data?.stock === 0}
                          >
                            {data?.stock === 0
                              ? "Currently Unavailable to Purchase"
                              : isItemInCart
                              ? "Already added to the cart"
                              : "Add to cart"}
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative pt-5">
                        <div className="flex flex-col p-5 rounded-2xl bg-red-50 dark:bg-opacity-90">
                          <div>
                            <LiaShippingFastSolid size={20} />
                          </div>
                          <div className="mt-2.5">
                            <p className="font-semibold text-slate-900">
                              Free shipping
                            </p>
                            <p className="text-slate-500 mt-0.5 text-sm">
                              On orders over $50.00
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col p-5 rounded-2xl bg-sky-50 dark:bg-opacity-90">
                          <div>
                            <FaExchangeAlt />
                          </div>
                          <div className="mt-2.5">
                            <p className="font-semibold text-slate-900">
                              Very easy to return
                            </p>
                            <p className="text-slate-500 mt-0.5 text-sm">
                              Just phone number.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </Layout>
      </main>
    </>
  );
};

export default viewProduct;
