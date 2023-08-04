import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/searchContext";
import { runFireworks } from "@/lib/utils";
import Lottie from "lottie-react";
import SuccessAnimation from "../lib/success_animation.json";
import Button from "@/components/UI/Button";
import { useRouter } from "next/router";

const Success = () => {
  const { setCartItems } = useCart();
  const router = useRouter();

  useEffect(() => {
    setCartItems([]);
    runFireworks();
  }, []);

  return (
    <div className=" min-h-[60vh]">
      <div className="w-[1000px] bg-gray-100 flex justify-center items-center flex-col mt-40 m-auto p-[50px] rounded-[15px]">
        <div className="h-44 w-44 capitalize">
          <Lottie animationData={SuccessAnimation} loop={true} />
        </div>
        <h2 className="text-4xl font-bold">Thank you for your order!</h2>
        <p className="text-xl mt-2 font-semibold text-center ">
          Check your email inbox for the receipt.
        </p>
        <p className="text-base mt-2 font-semibold text-center">
          If you have any questions, please email
          <a
            className="text-[#474e68] ml-[5px]"
            href="mailto:order@example.com"
          >
            order@example.com
          </a>
        </p>
        <Link href="/" className="mt-3">
          <Button
            type="button"
            variant="primary"
            onClick={() => router.push("/shop")}
          >
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
