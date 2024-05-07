"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
const apiKey = "896ecd8c";

interface SearchContextValue {
  movieName: string;
  setMovieName: React.Dispatch<React.SetStateAction<string>>;
  results: any;
  SearchNow: () => Promise<void>;
}
const CreateSearch = createContext<SearchContextValue>({
  movieName: "",
  setMovieName: () => {},
  results: null,
  SearchNow: () => Promise.resolve(),
});
function useSearch() {
  return useContext(CreateSearch);
}
function SearchContextProvider({ children }: { children: React.ReactNode }) {
  const [movieName, setMovieName] = useState("");
  const [results, setResults] = useState<any>(null);
  const SearchNow = async () => {
    try {
      const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(
        movieName
      )}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log(data);
      if (data.Search) {
        setResults(data.Search);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.log("Error in loading the data", error);
    }
  };

  return (
    <CreateSearch.Provider
      value={{ movieName, setMovieName, results, SearchNow }}
    >
      {children}
    </CreateSearch.Provider>
  );
}

export { SearchContextProvider, useSearch };
