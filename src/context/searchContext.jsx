import { useRouter } from "next/router";
import React, { useState } from "react";
export const SearchContext = React.createContext("");

const SearchProvider = ({ children }) => {
  const [searchTerms, setSearchTerms] = useState("");
  const router = useRouter();

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (searchTerms !== "") {
      router.push(`/searchTerm/${searchTerms}`);
    }
    return;
  };

  const cxtValue = {
    searchTerms,
    setSearchTerms,
    onSubmitForm,
  };

  return (
    <SearchContext.Provider value={cxtValue}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
