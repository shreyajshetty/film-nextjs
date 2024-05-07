"use client";
import CardHome from "@/components/CardHome";
import { Dmovies, Movie } from "../movies";
import { AddIcon, InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";
import { PlayIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Modals, ModalTypes } from "@/components/modals";
import "../globals.css";
import { Tooltip } from "@chakra-ui/react";
import { useSearch } from "@/components/search";
import { useRouter } from "next/navigation";
import { Modalstar } from "@/components/modalstar";

export default function Page() {
  const [InfoModalOpen, setInfoModalOpen] = useState(false);
  const [isStarModalOpen, setStarModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<Movie | null>(null);
  const { results, SearchNow } = useSearch();
  const router = useRouter();

  const handlePlayTrailer = (trailerUrl: string) => {
    window.open(trailerUrl, "_blank");
  };

  const handleModalOpen = (movie: Movie) => {
    setSelectedContent(movie);
    setInfoModalOpen(true);
  };

  const starModalOpen = (movie: Movie) => {
    setSelectedContent(movie);
    setStarModalOpen(true);
  };

  const handleCloseModal = () => {
    setInfoModalOpen(false);
    setStarModalOpen(false);
  };
  const handleCardClick = (movie: Movie) => {
    const movieSlug = movie.imdbID;
    router.push(`/search/${movieSlug}`);
  };

  const handleMoreInfoClick = (
    movie: Movie,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setSelectedContent(movie);
    setInfoModalOpen(true);
  };

  const handleStarIcon = (
    movie: Movie,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setSelectedContent(movie);
    setStarModalOpen(true);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto py-8 px-8">
      {Dmovies.map((movie, index) => (
        <CardHome key={index}>
          <div
            onClick={() => {
              handleCardClick(movie);
            }}
          >
            <div className="flex flex-col  content-start place-content-start py-0 relative">
              <div className="m-0 p-0 mt-0">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  width="100%"
                  height="150px"
                />
              </div>

              <h3 className=" text-lg mt-2 font-semibold ml-3 hover:underline">
                {movie.Title}
              </h3>
              <div className="text-sm text-gray-500 ml-3">{movie.Genre}</div>
              <div className="text-sm ml-3 ">{movie.Year}</div>
              <div className="flex flex-row">
                <StarIcon style={{ color: "#FFD700" }} className="ml-3 mt-1" />
                <div className="text-sm ml-2 mt-0.5">{movie.imdbRating}</div>
                <div onClick={(event) => handleStarIcon(movie, event)}>
                  <StarIcon
                    style={{ color: "#718096" }}
                    className="hover:text-blue-500 ml-6 mb-1"
                    onClick={() => starModalOpen(movie)}
                  />
                </div>
              </div>
              <button className="text-lg text-blue-500 bg-slate-200 rounded-lg mx-4 py-2 mt-8 font-medium hover:bg-slate-300 ">
                <AddIcon className="mr-1" />
                Watch List
              </button>
              <div className="flex items-center mt-4 ml-6  justify-between">
                <button
                  className="text-lg bg-transparent rounded-lg text-md font-medium overflow-y-hidden mt-1 mb-2 ml-6 py-2 px-1 hover:bg-slate-300 "
                  onClick={() => handlePlayTrailer(movie.Trailer)}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <PlayIcon
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                  />
                  Trailer
                </button>
                <div onClick={(event) => handleMoreInfoClick(movie, event)}>
                  <Tooltip label={`See More Information about ${movie.Title}`}>
                    <InfoOutlineIcon
                      className=" text-lg mr-8 mt-1 mb-2 rounded-xl hover:bg-slate-300"
                      onClick={() => handleModalOpen(movie)}
                    />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </CardHome>
      ))}
      {selectedContent && (
        <>
          <Modals
            isOpen={InfoModalOpen}
            isClose={handleCloseModal}
            selectedContent={selectedContent}
          />
          <Modalstar
            isOpen={isStarModalOpen}
            isClose={handleCloseModal}
            selectedContent={selectedContent}
          />
        </>
      )}
    </div>
  );
}
