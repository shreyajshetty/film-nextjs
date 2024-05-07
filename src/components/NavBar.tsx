"use client";
import {
  FilmIcon,
  HomeIcon,
  TvIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

export default function NavBarComponent() {
  const [click, setClick] = useState(false);
  const togglenavbar = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };
  return (
    <>
      <nav>
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-between items-center ">
            <div className=" flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-300 focus:outline-none, ring-2, ring-inset"
                onClick={togglenavbar}
              >
                <h1 className="text-lg font-bold text-black">Menu</h1>
                <svg
                  className="h-6 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {click ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {click && (
          <div className="bg-gray-200 fixed inset-0 z-50">
            <button
              className="absolute top-0 right-0  m-4 mr-60 mt-12 rounded-full p-2 hover:bg-blue-900  bg-blue-800 focus:outline-none"
              onClick={togglenavbar}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div
              className="px-10 pt-2 pb-3 space-y-5 sm:px-3 ml-10 mt-12"
              style={{ marginRight: "800px" }}
            >
              <h1 className="font-bold text-2xl px-36">
                Film<span className="text-blue-800 font-bold">Now</span>
              </h1>

              <Link
                href="/"
                className="text-xl  text-black hover:bg-gray-300 rounded-lg flex items-center px-36"
                onClick={closeMenu}
              >
                {" "}
                <HomeIcon className="h-6 w-6 mr-1" />
                Dashboard
              </Link>
              <Link
                href="/cinemas"
                className="text-xl  text-black hover:bg-gray-300 rounded-lg flex items-center px-36"
                onClick={closeMenu}
              >
                <FilmIcon className="h-6 w-6 mr-2" />
                Movies
              </Link>
              <Link
                href="/shows"
                className="text-xl text-black hover:bg-gray-300 rounded-lg flex items-center px-36"
                onClick={closeMenu}
              >
                <TvIcon className="h-6 w-6 mr-2" />
                TV Shows
              </Link>
              <Link
                href="/community"
                className="text-xl text-black hover:bg-gray-300 rounded-lg flex items-center px-36"
                onClick={closeMenu}
              >
                <UserGroupIcon className="h-6 w-6" />
                Community
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
