import React from "react";
import FailedAnimation from "../lib/failed_animation.json";
import Lottie from "lottie-react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@/components/UI/Button";

const Cancelled = () => {
  return (
    <div className="min-h-screen px-4 flex justify-center items-center">
      <div className="bg-gray-100 px-6 py-8 rounded-lg max-w-5xl w-full">
        <div className="h-32 w-32 md:h-44 md:w-44 mx-auto">
          <Lottie animationData={FailedAnimation} loop={true} />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-center mt-4">
          Failed to order your items!
        </h2>
        <p className="text-sm md:text-base mt-3 font-semibold text-center">
          Please try again later.
        </p>

        <div className="mt-4 flex justify-center">
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

export default Cancelled;
