import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import NewsCard from "../UI/NewsCard";
import Loader from "../reusableComponents/Loader";
import { categories } from "./categories";
import Herobanner from "../reusableComponents/Herobanner";
import useNewsData from "@/hooks/useNewsData";

const HomePage = () => {
  const {
    isLoading: isLoadingLatestNews,
    isError: isErrorLatestNews,
    data: latestNewsData,
  } = useNewsData(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );

  const {
    isLoading: isLoadingSports,
    isError: isErrorSports,
    data: sportsData,
  } = useNewsData(
    `https://newsapi.org/v2/everything?q=sports&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );

  const renderNewsSection = (news, title, link) => (
    <div className="my-10">
      <div className="flex items-center justify-between">
        <h5 className="text-2xl font-semibold">{title}</h5>
        <Link
          className="text-green-700 font-semibold flex items-center gap-2"
          href={link}
        >
          See all <LuArrowRight />
        </Link>
      </div>
      <div className="grid mt-5 gap-8 place-items-center place-content-start lg:grid-cols-2 grid-cols-1">
        {news?.articles.slice(0, 4).map((item, index) => (
          <NewsCard
            key={index}
            item={item}
            truncateLengthDescription={120}
            truncateLengthTitle={70}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Herobanner />

      {isLoadingLatestNews ? (
        <div className="w-full mt-10 h-[50vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : isErrorLatestNews ? (
        <div className="w-full mt-10 h-[20vh] flex justify-center items-center">
          <h5 className="text-green-700 text-xl font-semibold">
            Some error occurred, Please try again later...
          </h5>
        </div>
      ) : (
        <div className="my-8">
          {renderNewsSection(latestNewsData, "Latest News", "/latest-news")}
        </div>
      )}

      <div className="my-20" id="categories">
        <div className="flex items-center justify-between">
          <h5 className="text-2xl font-semibold">Categories</h5>
        </div>
        <div className="flex flex-wrap justify-center gap-10 items-center mt-6">
          {categories.map((item, index) => (
            <Link
              key={index}
              href={`/searchTerm/${item.name}`}
              className="flex flex-col hover:bg-gray-200 border border-white hover:border-gray-300 px-4 py-2 rounded-md items-center justify-center"
            >
              <div className="p-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full">
                <img
                  className="h-20 border-2 w-20 rounded-full"
                  src={item.image}
                  alt=""
                />
              </div>
              <p className="text-sm mt-2 text-gray-600">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {isLoadingSports ? (
        <div className="w-full mt-10 h-[50vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : isErrorSports ? (
        <div className="w-full mt-10 h-[20vh] flex justify-center items-center">
          <h5 className="text-green-700 text-xl font-semibold">
            Some error occurred, Please try again later...
          </h5>
        </div>
      ) : (
        <div className="my-10">
          {renderNewsSection(sportsData, "Sports News", "/searchTerm/sports")}
        </div>
      )}
    </>
  );
};

export default HomePage;
