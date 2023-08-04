import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";

const Herobanner = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
      className=" md:px-20 md:py-14 px-6 py-6 mt-8 bg-[#fbf0e4] rounded-lg"
      style={{
        backgroundImage: "url(/images/hero-right-2.cb4660d930692248be75.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: 500,
        backgroundPositionY: -50,
        backgroundPositionX: 700,
      }}
    >
      <div className="flex justify-center md:justify-start">
        <motion.h2
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="md:text-5xl md:text-left text-center md:flex-[0.5] text-green-700 text-2xl font-bold md:leading-[60px] "
        >
          Get Upto 50% Off On Selected Headphone
        </motion.h2>
      </div>
      <div className="mt-4 w-full md:w-auto">
        <motion.button
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          onClick={() => router.push("/shop")}
          className="bg-green-700 md:px-10 px-2 py-1 w-full md:w-auto active:scale-90 hover:bg-green-900 md:py-3 text-base rounded-full transition text-white"
        >
          Shop now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Herobanner;
