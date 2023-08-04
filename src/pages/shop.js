import FilterSection from "@/components/FilterSection";
import ProductCard from "@/components/UI/ProductCard";
import Layout from "@/components/layoutComps/Layout";
import Loader from "@/components/reusableComponents/Loader";
import useFetchProduct from "@/hooks/useFetchProduct";
import { Poppins } from "next/font/google";
import Head from "next/head";
import React, { useState } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const shop = () => {
  const [showDollarRange, setShowDollarRange] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [range, setRange] = useState([1, 5000]);
  const [rangeChanged, setRangeChanged] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const { isLoading, isError, data } = useFetchProduct(
    `https://tiny-red-nematode-kit.cyclic.cloud/products`
  );

  const handleRangeChange = (newRange) => {
    setRange(newRange);
    setRangeChanged(true);
  };

  const filteredProducts = data?.filter(
    (item) =>
      (item?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item?.description?.toLowerCase().includes(searchQuery.toLowerCase())) &&
      item.price >= range[0] &&
      item.price <= range[1] &&
      (selectedCategories.length === 0 ||
        item.category.some((cat) => selectedCategories.includes(cat)))
  );
  return (
    <>
      <Head>
        <title>Shop | Buletin</title>
      </Head>
      <main className={poppins.className}>
        <Layout>
          <div className="mt-20">
            <div className="max-w-2xl mx-auto -mt-10 flex flex-col lg:-mt-7">
              <div className="relative w-full">
                <label for="search-input" className="text-neutral-500 ">
                  <input
                    type="search"
                    className="block w-full border-neutral-200 focus:outline-none border focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white rounded-full text-sm font-normal pl-14 py-5 pr-5 md:pl-16 shadow-lg "
                    id="search-input"
                    placeholder="Type your keywords"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />

                  <PiMagnifyingGlass className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6" />
                </label>
              </div>
            </div>
          </div>
          <FilterSection
            setRange={setRange}
            showDollarRange={showDollarRange}
            range={range}
            setShowDollarRange={setShowDollarRange}
            handleRangeChange={handleRangeChange}
            setShowCategories={setShowCategories}
            showCategories={showCategories}
            handleCategoryChange={handleCategoryChange}
            selectedCategories={selectedCategories}
            setRangeChanged={setRangeChanged}
            rangeChanged={rangeChanged}
          />
          {rangeChanged ? (
            <div className="my-8">
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
              ) : filteredProducts.length > 0 ? (
                <div className="my-20">
                  <div className="flex items-center justify-between">
                    <h5 className="text-2xl font-semibold">Products</h5>
                  </div>
                  <div className="grid mt-5 gap-y-2 sm:gap-y-10 sm:gap-x-10 gap-x-4  lg:grid-cols-4 md:grid-cols-2 grid-cols-2">
                    {filteredProducts.map((item) => (
                      <ProductCard key={item._id} item={item} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="w-full mt-10 h-[20vh] flex justify-center items-center">
                  <h5 className="text-green-700 text-xl font-semibold">
                    No products found with the applied filters.
                  </h5>
                </div>
              )}
            </div>
          ) : (
            <div className="my-8">
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
              ) : filteredProducts.length > 0 ? (
                <div className="my-20">
                  <div className="flex items-center justify-between">
                    <h5 className="text-2xl font-semibold">Products</h5>
                  </div>
                  <div className="grid mt-5 gap-y-2 sm:gap-y-10 sm:gap-x-10 gap-x-4  lg:grid-cols-4 md:grid-cols-2 grid-cols-2">
                    {data?.map((item) => (
                      <ProductCard key={item._id} item={item} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="w-full mt-10 h-[20vh] flex justify-center items-center">
                  <h5 className="text-green-700 text-xl font-semibold">
                    No products found with the applied filters.
                  </h5>
                </div>
              )}
            </div>
          )}
        </Layout>
      </main>
    </>
  );
};

export default shop;
