import Button from "@/components/UI/Button";
import Layout from "@/components/layoutComps/Layout";
import { useCart } from "@/context/searchContext";
import getStripe from "@/lib/getStripe";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { LuCheck, LuMinus, LuPlus, LuTrash2, LuX } from "react-icons/lu";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }

    return text.substring(0, maxLength - 3) + "...";
  }

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "applicationjson" },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <main className={poppins.className}>
      <Layout>
        <div className="mb-12 pt-20">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">
            Shopping Cart
          </h2>
          <div className="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700 ">
            <a className="" href="/">
              Homepage
            </a>

            <span className="text-xs mx-1 sm:mx-1.5">/</span>
            <span className="underline">Shopping Cart</span>
          </div>
        </div>
        <hr className="border-slate-200 "></hr>
        <div className="flex flex-col mt-14 lg:flex-row">
          <div className="w-full lg:w-[60%] xl:w-[55%] divide-y divide-slate-200">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => {
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
                            <span className="ml-1 leading-none">
                              Out of Stock
                            </span>
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
              })
            ) : (
              <div className="flex flex-col items-center mt-14">
                <p className="text-xl font-semibold mb-4">
                  Your cart is empty.
                </p>
                <p className="text-gray-500">
                  Add some products to your cart and start shopping!
                </p>
                <Link href="/">
                  <p className="mt-4 text-primary-6000 hover:underline">
                    Browse Products
                  </p>
                </Link>
              </div>
            )}
          </div>
          <div className="border-t lg:border-t-0 lg:border-l border-slate-200  my-10 lg:my-0 lg:mx-10 xl:mx-16 2xl:mx-20 flex-shrink-0"></div>
          <div className="flex-1">
            <div className="sticky top-28">
              <h3 className="text-lg font-semibold ">Order Summary</h3>
              <div className="mt-7 text-sm text-slate-500  divide-y divide-slate-200/70 ">
                <div className="flex justify-between pb-4">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900 ">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between py-4">
                  <span>Shpping estimate</span>
                  <span className="font-semibold text-slate-900 ">$5.00</span>
                </div>
                <div className="flex justify-between py-4">
                  <span>Tax estimate</span>
                  <span className="font-semibold text-slate-900 ">$24.90</span>
                </div>
                <div className="flex justify-between font-semibold text-slate-900  text-base pt-4">
                  <span>Order total</span>
                  <span>$276.00</span>
                </div>
              </div>
              <div className="mt-4">
                <Button
                  onClick={handleCheckout}
                  variant="primary"
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default cart;
