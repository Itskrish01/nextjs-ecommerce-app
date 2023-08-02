import axios from "axios";

const { useRouter } = require("next/router");
const { useState, useEffect } = require("react");

const useSearchResults = (searchTerm) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    try {
      setIsLoading(true);
      if (router.query.term) {
        axios
          .get(
            `https://newsapi.org/v2/everything?q=${router.query.term}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
          )
          .then((res) => {
            setData(res.data);
            setIsError(false);
          })
          .catch((err) => {
            setIsError(true);
            setIsLoading(false);
            console.log(err);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    } catch (error) {
      setIsError(true);
      console.log(error);
      setIsLoading(false);
    }
  }, [router.query.term]);

  return { isLoading, isError, data };
};

export default useSearchResults;
