import React from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useRef } from "react";
import { useCallback } from "react";

const Slider = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="mt-24 lg:mt-32">
      <div className="">
        <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900  nc-p-r-container">
          <div>
            <motion.h2
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              className="text-3xl md:text-4xl font-semibold"
            >
              Discover more
              <span className="text-neutral-500">. </span>
              <span className="text-neutral-500">
                Good things are waiting for you
              </span>
            </motion.h2>
          </div>
          <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
            <div className="nc-NextPrev relative flex items-center text-slate-500 ">
              <button
                onClick={handlePrev}
                className="w-10 h-10 mr-2 hover:border-slate-200 active:border-slate-500 rounded-full flex items-center justify-center border-2 "
              >
                <LuArrowLeft />
              </button>
              <button
                className="w-10 h-10 hover:border-slate-200 active:border-slate-500 rounded-full flex items-center justify-center border-2"
                onClick={handleNext}
              >
                <LuArrowRight />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          modules={[Pagination]}
          className="mySwiper"
          ref={sliderRef}
        >
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative w-full h-60 rounded-2xl overflow-hidden group bg-yellow-50"
            >
              <div>
                <div className=" absolute inset-5 sm:inset-8">
                  <img
                    src="https://ciseco-reactjs.vercel.app/static/media/1.a586787f3de7735e65d3.png"
                    className="absolute right-0 w-1/2 max-w-[260px] h-full object-contain drop-shadow-xl"
                    alt="nc-imgs"
                  />
                </div>
              </div>

              <div>
                <div className="absolute inset-5 sm:inset-8 flex flex-col">
                  <div className="max-w-xs">
                    <span className="block mb-2 text-sm text-slate-700">
                      Explore new arrivals
                    </span>
                    <h2 className="text-xl md:text-2xl text-slate-900 font-semibold">
                      Shop the latest <br /> from top brands
                    </h2>
                  </div>
                  <div className="mt-auto">
                    <button className="relative shadow-lg h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-white text-slate-70 0 hover:bg-gray-100  nc-shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                      Show me all
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="relative  h-60 rounded-2xl overflow-hidden group bg-pink-100"
            >
              <div>
                <div className=" absolute inset-5 sm:inset-8">
                  <img
                    src="https://ciseco-reactjs.vercel.app/static/media/5.46eedaa5a6a199045d6d.png"
                    className="absolute right-0 w-1/2 max-w-[260px] h-full object-contain drop-shadow-xl"
                    alt="nc-imgs"
                  />
                </div>
              </div>

              <div>
                <div className="absolute inset-5 sm:inset-8 flex flex-col">
                  <div className="max-w-xs">
                    <span className="block mb-2 text-sm text-slate-700">
                      Digital gift cards
                    </span>
                    <h2 className="text-xl md:text-2xl text-slate-900 font-semibold">
                      Give the gift <br />
                      of choice
                    </h2>
                  </div>
                  <div className="mt-auto">
                    <button className="relative shadow-lg h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-white text-slate-70 0 hover:bg-gray-100  nc-shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                      Show me all
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="relative w-full h-60 rounded-2xl overflow-hidden group bg-blue-50"
            >
              <div>
                <div
                  className="nc-NcImage absolute inset-5 sm:inset-8"
                  data-nc-id="NcImage"
                >
                  <img
                    src="https://ciseco-reactjs.vercel.app/static/media/4.452d9d5088a11b0c0d6a.png"
                    className="absolute right-0 w-1/2 max-w-[260px] h-full object-contain drop-shadow-xl"
                    alt="nc-imgs"
                  />
                </div>
              </div>
              <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span>
              <div>
                <div className="absolute inset-5 sm:inset-8 flex flex-col">
                  <div className="max-w-xs">
                    <span className="block mb-2 text-sm text-slate-700">
                      Sale collection
                    </span>
                    <h2 className="text-xl md:text-2xl text-slate-900 font-semibold">
                      Up to <br /> 80% off retail
                    </h2>
                  </div>
                  <div className="mt-auto">
                    <button className="relative shadow-lg h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-white text-slate-70 0 hover:bg-gray-100  nc-shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                      Show me all
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
