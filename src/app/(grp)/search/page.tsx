"use client";
import CardHome from "@/components/CardHome";
import CardMovie from "@/components/CardMovies";
import CardSearch from "@/components/CardSearch";
import { useSearch } from "@/components/search";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export interface SearchResult {
  Title: string;
  Year: string;
  Runtime: string;
  Poster: string;
  Genre: string;
  Plot: string;
  Director: string;
  Writer: string;
  Actors: string;
  imdbID: string;
}

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );
  const [selectedMovie, setSelectedMovie] = useState<SearchResult | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { results, SearchNow } = useSearch();
  const router = useRouter();

  useEffect(() => {
    if (results) {
      setSearchResults(results);
    }
  }, [results]);

  useEffect(() => {
    if (selectedMovie) {
      const movieSlug = selectedMovie.imdbID;
      SearchNow();
      router.push(`/search/${movieSlug}`);
    }
  }, [selectedMovie]);
  const handleSearch = (movie: SearchResult) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="grid grid-cols-1 grid-rows-auto mx-auto ml-10 my-10">
      {searchResults && searchResults.length > 0 ? (
        searchResults.map((movie: SearchResult, index: number) => (
          <CardSearch key={index}>
            <div onClick={() => handleSearch(movie)}>
              <div className="flex flex-row">
                <div
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "auto",
                  }}
                >
                  <Image
                    src={movie.Poster}
                    alt={movie.Title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg mt-2 font-semibold ml-3">
                    {movie.Title}
                  </h3>
                  <div className="text-md font-md text-gray-500 ml-3">
                    {movie.Year}
                  </div>
                  <div className="text-md font-md text-gray-500 ml-3">
                    {movie.Actors}
                  </div>
                </div>
              </div>
            </div>
          </CardSearch>
        ))
      ) : (
        <div className="text-center mt-5 text-lg text-gray-700">
          Oops! No results found
        </div>
      )}
    </div>
  );
}
