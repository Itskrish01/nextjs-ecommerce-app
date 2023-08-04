import axios from "axios";

const { useRouter } = require("next/router");
const { useState, useEffect } = require("react");

const useSearchResults = (product_id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    try {
      setIsLoading(true);
      if (product_id) {
        axios
          .get(
            `https://lazy-jade-pigeon-shoe.cyclic.app/products/${product_id}`
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
  }, [product_id]);

  return { isLoading, isError, data };
};

export default useSearchResults;
