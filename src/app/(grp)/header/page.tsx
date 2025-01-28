"use client";
import NavBarComponent from "@/components/NavBar";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/NavBar";
import { SearchIcon } from "@chakra-ui/icons";
import { useSearch, SearchContextProvider } from "@/components/search";
import { useRouter } from "next/navigation";

export default function Header() {
  const { movieName, setMovieName, SearchNow } = useSearch();
  const router = useRouter();

  const handleSearch = () => {
    SearchNow();
    router.push("/search");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieName(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mt-0 p-0 flex">
      <h1 className="ml-5 mt-5 font-bold text-2xl">
        Film<span className="text-blue-800 font-bold">Now</span>
      </h1>
      <div className="mt-4">
        <Navbar />
      </div>
      <div className="flex items-center justify-center mt-5 ms-55 relative hover:hover:scale-105">
        <div className="relative">
          <input
            className="mt-0 pl-5 pr-10 py-1 rounded-sm hover:shadow-lg focus:shadow-lg "
            style={{
              boxShadow: "1px 2px 1px 2px rgba(0,0,0,0.5)",
              outline: "none",
              width: "800px",
            }}
            type="text"
            placeholder="Search Film Now"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <SearchIcon
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 hover:scale-105"
            onClick={handleSearch}
          />
        </div>
      </div>

      <div className="flex flex-row mt-7 ms-6 gap-10">
        <Link className="text-md font-bold hover:text-blue-600" href="/signup">
          Sign Up
        </Link>

        <Link className="text-md font-bold hover:text-blue-600" href="/login">
          Log In
        </Link>
      </div>
    </div>
  );
}
