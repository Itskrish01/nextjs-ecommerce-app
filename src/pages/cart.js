import Button from "@/components/UI/Button";
import CartItem from "@/components/UI/CartItem";
import Layout from "@/components/layoutComps/Layout";
import { useCart } from "@/context/cartContext";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const cart = () => {
  const router = useRouter();
  const { cartItems } = useCart();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    toast.loading("Redirecting...", { id: "fakeLoading" });
    setTimeout(() => {
      router.push("/success");
      toast.remove("fakeLoading");
    });
  };

  return (
    <>
      <Head>
        <title>Cart | Buletin</title>
      </Head>
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
                  return <CartItem item={item} />;
                })
              ) : (
                <div className="flex flex-col items-center mt-4 mb-10">
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
                    <span className="font-semibold text-slate-900 ">
                      $24.90
                    </span>
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
    </>
  );
};

export default cart;
