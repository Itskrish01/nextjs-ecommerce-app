import React, { useState, useEffect } from "react";
import Link from "next/link";

import { runFireworks } from "@/lib/utils";
import Lottie from "lottie-react";
import SuccessAnimation from "../lib/success_animation.json";
import Button from "@/components/UI/Button";
import { useRouter } from "next/router";
import { useCart } from "@/context/cartContext";

const Success = () => {
  const { setCartItems } = useCart();
  const router = useRouter();

  useEffect(() => {
    setCartItems([]);
    runFireworks();
  }, []);

  return (
    <div className="min-h-screen px-4 flex justify-center items-center">
      <div className="bg-gray-100 max-w-5xl px-6 py-8 rounded-lg w-full">
        <div className="h-32 w-32 md:h-44 md:w-44 mx-auto">
          <Lottie animationData={SuccessAnimation} loop={true} />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-center mt-4">
          Thank you for your order!
        </h2>
        <p className="text-sm md:text-base mt-2 font-semibold text-center">
          Check your email inbox for the receipt.
        </p>
        <p className="text-xs md:text-sm mt-2 font-semibold text-center">
          If you have any questions, please email{" "}
          <a className="text-blue-600 ml-1" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <div className="mt-3 flex justify-center">
          <Link href="/shop">
            <Button type="button" variant="primary">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
