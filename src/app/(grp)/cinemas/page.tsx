"use client";
import CardHome from "@/components/CardHome";
import { Cinemas, Cine } from "@/app/movies";
import { AddIcon, InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";
import { PlayIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import CardMovie from "@/components/CardMovies";
import { ModalMovies } from "@/components/modalsMovies";
import { useEffect, useState } from "react";
import "@/app/globals.css";
import { Tooltip } from "@chakra-ui/react";
import { useSearch } from "@/components/search";
import { useRouter } from "next/navigation";
import { Modalstar } from "@/components/modalstar";
export default function Movies() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isStarModalOpen, setStarModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<Cine | null>(null);
  const { results, SearchNow } = useSearch();
  const router = useRouter();

  const handleModalOpen = (film: Cine) => {
    setSelectedContent(film);
    setModalOpen(true);
  };

  const starModalOpen = (film: Cine) => {
    setSelectedContent(film);
    setStarModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setStarModalOpen(false);
  };
  const handleCardClick = (film: Cine) => {
    const movieSlug = film.imdbID;
    router.push(`/search/${movieSlug}`);
  };

  const handleMoreInfoClick = (
    film: Cine,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setSelectedContent(film);
    setModalOpen(true);
  };

  const handleStarIcon = (
    film: Cine,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setSelectedContent(film);
    setStarModalOpen(true);
  };

  return (
    <div className="grid grid-cols-1 gap-10 mx-auto ml-10 my-10">
      {Cinemas.map((film, index) => (
        <CardMovie key={index}>
          <div
            onClick={() => {
              handleCardClick(film);
            }}
          >
            <div className="flex flex-row ">
              <div className=" ">
                <img
                  src={film.Poster}
                  alt={film.Title}
                  width="100px"
                  height="450px"
                />
              </div>
              <div className="flex flex-col">
                <h3 className=" text-lg mt-2 font-semibold ml-3  hover:underline">
                  {film.Title}
                </h3>
                <div className="text-sm text-gray-500 ml-3">{film.Genre}</div>
                <div className="flex">
                  <div className="text-sm text-gray-500 ml-3">{film.Year}</div>
                  <div className="text-sm text-gray-500 ml-3">
                    {film.Runtime}
                  </div>
                  <div className="text-sm text-gray-500 ml-3">{film.Rated}</div>
                </div>
                <div className="flex flex-row">
                  <StarIcon
                    style={{ color: "#FFD700" }}
                    className="ml-3 mt-1"
                  />
                  <div className="text-sm ml-2 mt-0.5 text-gray-500">
                    {film.imdbRating} ({film.imdbVotes})
                  </div>
                  <div onClick={(event) => handleStarIcon(film, event)}>
                    <StarIcon
                      style={{ color: "#718096" }}
                      className="hover:text-blue-500 ml-3 mb-1"
                      onClick={() => starModalOpen(film)}
                    />
                  </div>
                </div>
              </div>
              <div onClick={(event) => handleMoreInfoClick(film, event)}>
                <Tooltip
                  label={`See More Information about ${film.Title}`}
                  bg="white"
                  color="black"
                >
                  <InfoOutlineIcon
                    className="text-lg mr-4 mt-16 rounded-xl hover:bg-slate-300"
                    style={{ marginLeft: "490px", color: "#0052cc" }}
                  />
                </Tooltip>
              </div>
              ;
            </div>
          </div>
        </CardMovie>
      ))}
      {selectedContent && (
        <>
          <ModalMovies
            isOpen={isModalOpen}
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
