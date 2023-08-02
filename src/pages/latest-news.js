import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Layout from "@/components/layoutComps/Layout";
import Loader from "@/components/reusableComponents/Loader";
import NewsCard from "@/components/UI/NewsCard";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const latest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    try {
      setIsLoading(true);
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        )
        .then((res) => {
          setData(res.data);
          setIsError(false);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  }, []);
  return (
    <main className={poppins.className}>
      <Layout>
        <div className="md:p-10 p-4 text-center bg-gray-200/60 rounded-lg ">
          <div className="">
            <h2 className="md:text-3xl text-xl font-bold md:leading-[46px] mt-3 md:px-44">
              Top <span className="text-red-500">Headlines</span>
            </h2>
          </div>
        </div>
        {isLoading ? (
          <div className="w-full mt-10 h-[50vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="grid gap-8 mt-10 grid-cols-1 w-full">
            {data?.articles.map((item) => {
              return (
                <NewsCard
                  item={item}
                  truncateLengthDescription={400}
                  truncateLengthTitle={isTabletOrMobile ? 60 : 200}
                />
              );
            })}
          </div>
        )}
      </Layout>
    </main>
  );
};

export default latest;
