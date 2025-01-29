"use client";
import CardHome from "@/components/CardHome";
import { Series, Tvseries } from "@/app/movies";
import { AddIcon, InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";
import { PlayIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import CardMovie from "@/components/CardMovies";
import { useEffect, useState } from "react";
import { ModalShows } from "@/components/modalsShows";
import { Tooltip } from "@chakra-ui/react";
import { useSearch, SearchContextProvider } from "@/components/search";
import { useRouter } from "next/navigation";
import { Modalstar } from "@/components/modalstar";
import Image from "next/image";

export default function Shows() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isStarModalOpen, setStarModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<Tvseries | null>(null);
  const { results, SearchNow } = useSearch();
  const router = useRouter();

  const handleCardClick = (show: Tvseries) => {
    const movieSlug = show.imdbID;
    router.push(`/search/${movieSlug}`);
  };

  const handleMoreInfoClick = (
    show: Tvseries,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setSelectedContent(show);
    setModalOpen(true);
  };

  const handleModalOpen = (show: Tvseries) => {
    setSelectedContent(show);
    setModalOpen(true);
  };

  const starModalOpen = (show: Tvseries) => {
    setSelectedContent(show);
    setStarModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setStarModalOpen(false);
  };

  const handlePlayTrailer = (trailerUrl: string) => {
    window.open(trailerUrl, "_blank");
  };

  const handleStarIcon = (
    show: Tvseries,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setSelectedContent(show);
    setStarModalOpen(true);
  };

  return (
    <div className="grid grid-cols-1 gap-10 mx-auto ml-10 my-10">
      {Series.map((show, index) => (
        <CardMovie key={index}>
          <div
            onClick={() => {
              handleCardClick(show);
            }}
          >
            <div className="flex flex-row ">
              <div className=" ">
                <Image
                  src={show.Poster}
                  alt={show.Title}
                  width={100}
                  height={450}
                />
              </div>
              <div className="flex flex-col">
                <h3 className=" text-lg mt-2 font-semibold ml-3  hover:underline">
                  {show.Title}
                </h3>
                <div className="text-sm text-gray-500 ml-3">{show.Genre}</div>
                <div className="flex">
                  <div className="text-sm text-gray-500 ml-3">{show.Year}</div>
                  <div className="text-sm text-gray-500 ml-3">
                    {show.Episodes}eps
                  </div>
                  <div className="text-sm text-gray-500 ml-3">{show.Rated}</div>
                </div>
                <div className="flex flex-row">
                  <StarIcon
                    style={{ color: "#FFD700" }}
                    className="ml-3 mt-1"
                  />
                  <div className="text-sm ml-2 mt-0.5 text-gray-500">
                    {show.imdbRating} ({show.imdbVotes})
                  </div>
                  <div onClick={(event) => handleStarIcon(show, event)}>
                    <StarIcon
                      style={{ color: "#718096" }}
                      className="hover:text-blue-500 ml-3 mb-1"
                      onClick={() => starModalOpen(show)}
                    />
                  </div>
                </div>
              </div>
              <div onClick={(event) => handleMoreInfoClick(show, event)}>
                <Tooltip
                  label={`See More Information about ${show.Title}`}
                  bg="white"
                  color="black"
                >
                  <InfoOutlineIcon
                    className=" text-lg  mr-4 mt-16 rounded-xl hover:bg-slate-300"
                    style={{ marginLeft: "490px", color: "#0052cc" }}
                    onClick={() => handleModalOpen(show)}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        </CardMovie>
      ))}
      {selectedContent && (
        <>
          <ModalShows
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
