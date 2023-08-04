import React from "react";
import FailedAnimation from "../lib/failed_animation.json";
import Lottie from "lottie-react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@/components/UI/Button";

const cancelled = () => {
  const router = useRouter();
  return (
    <div className="min-h-[60vh]">
      <div className="w-[1000px] bg-gray-100 flex justify-center items-center flex-col mt-40 m-auto p-[50px] rounded-[15px]">
        <div className="h-44 w-44 capitalize">
          <Lottie animationData={FailedAnimation} loop={true} />
        </div>
        <h2 className="text-4xl font-bold">Failed to order your items!</h2>
        <p className="text-xl mt-3 font-semibold text-center ">
          Please try again later.
        </p>

        <Link href="/" className="mt-4">
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

export default cancelled;
