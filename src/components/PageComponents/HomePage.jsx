import React from "react";
import Loader from "../reusableComponents/Loader";
import Herobanner from "../reusableComponents/Herobanner";
import ProductCard from "../UI/ProductCard";
import useFetchProduct from "@/hooks/useFetchProduct";
import Slider from "../reusableComponents/Slider";

const HomePage = () => {
  const { isLoading, isError, data } = useFetchProduct(
    `https://product-backend-api.vercel.app/products`
  );

  return (
    <>
      <Herobanner />
      <Slider />
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
        <div className="my-8">
          <div className="my-20">
            <div className="flex items-center justify-between">
              <h5 className="text-2xl font-semibold">Headphones</h5>
            </div>
            <div className="grid mt-5 gap-y-2 sm:gap-y-10 sm:gap-x-10 gap-x-4  lg:grid-cols-4 md:grid-cols-2 grid-cols-2">
              {data
                .filter((item) => item.category.includes("headphones"))
                .slice(0, 8)
                .map((item) => (
                  <ProductCard key={item._id} item={item} />
                ))}
            </div>
          </div>
        </div>
      )}

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
        <div className="my-8">
          <div className="my-20">
            <div className="flex items-center justify-between">
              <h5 className="text-2xl font-semibold">Apple products</h5>
            </div>
            <div className="grid mt-5 gap-y-2 sm:gap-y-10 sm:gap-x-10 gap-x-4  lg:grid-cols-4 md:grid-cols-2 grid-cols-2">
              {data
                .filter((item) => item.brand.toLowerCase() === "apple")
                .slice(0, 8)
                .map((item) => (
                  <ProductCard key={item._id} item={item} />
                ))}
            </div>
          </div>
        </div>
      )}

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
        <div className="my-8">
          <div className="my-20">
            <div className="flex items-center justify-between">
              <h5 className="text-2xl font-semibold">Gaming products</h5>
            </div>
            <div className="grid mt-5 gap-y-2 sm:gap-y-10 sm:gap-x-10 gap-x-4  lg:grid-cols-4 md:grid-cols-2 grid-cols-2">
              {data
                .filter(
                  (item) =>
                    item.category.includes("mouse") ||
                    item.category.includes("keyboard")
                )
                .slice(0, 10)
                .map((item) => (
                  <ProductCard key={item._id} item={item} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
