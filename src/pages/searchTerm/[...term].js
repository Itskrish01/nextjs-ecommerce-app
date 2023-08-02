import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Poppins } from "next/font/google";
import Layout from "@/components/layoutComps/Layout";
import Loader from "@/components/reusableComponents/Loader";
import NewsCard from "@/components/UI/NewsCard";
import ReactPaginate from "react-paginate";
import { IconContext } from "react-icons";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import useSearchResults from "@/hooks/useSearchResults";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const searchForNews = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const router = useRouter();
  const { isLoading, isError, data } = useSearchResults(router.query.term);

  useEffect(() => {
    setItemOffset(0);
  }, [router.query.term]);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data?.articles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.articles.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.articles.length;

    setItemOffset(newOffset);
  };

  return (
    <main className={poppins.className}>
      <Layout>
        <div className="md:p-10 p-4 text-center bg-gray-200/60 rounded-lg ">
          <div className="">
            <h2 className="md:text-3xl text-xl font-bold md:leading-[46px] mt-3 md:px-44">
              Top Search results for -
              <span className="text-green-700"> "{router.query.term}"</span>
            </h2>
          </div>
        </div>

        {isLoading ? (
          <div className="w-full mt-10 h-[50vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : isError ? (
          <div className="w-full mt-10 h-[20vh] flex justify-center items-center">
            <h5 className="text-green-700 text-lg sm:text-xl text-center font-semibold">
              Some error occurred, Please try again later...
            </h5>
          </div>
        ) : (
          <div className="grid gap-8 mt-10 grid-cols-1 w-full">
            {data?.articles.length === 0 && (
              <div className="w-full mt-10 h-[20vh] flex justify-center items-center">
                <h5 className=" text-xl font-semibold">
                  No result Found for the result -{" "}
                  <span className="text-green-700">"{router.query.term}"</span>
                </h5>
              </div>
            )}
            {currentItems?.map((item, index) => (
              <NewsCard
                key={index}
                item={item}
                truncateLengthDescription={400}
                truncateLengthTitle={isTabletOrMobile ? 60 : 200}
              />
            ))}
            <ReactPaginate
              breakLabel="..."
              nextLabel={
                <IconContext.Provider value={{ color: "#B8C1CC" }}>
                  <HiChevronRight className="sm:text-4xl text-3xl" />
                </IconContext.Provider>
              }
              className="flex  gap-1 md:gap-4 mx-2 justify-center shadow-md bg-white py-4 rounded-lg border border-gray-200 mt-4"
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              pageCount={pageCount}
              previousLabel={
                <IconContext.Provider value={{ color: "#B8C1CC" }}>
                  <HiChevronLeft className="sm:text-4xl text-3xl" />
                </IconContext.Provider>
              }
              renderOnZeroPageCount={null}
              previousClassName=" "
              nextClassName=""
              pageClassName="rounded-md"
              pageLinkClassName="text-lg sm:px-5 sm:py-1 px-3 py-0 rounded-md w-8 flex items-center justify-center"
              activeClassName="bg-indigo-500 text-white"
            />
          </div>
        )}
      </Layout>
    </main>
  );
};

export default searchForNews;
