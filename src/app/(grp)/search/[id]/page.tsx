"use client";
import CardHome from "@/components/CardHome";
import CardDetails from "@/components/cardDetails";
import { AddIcon, InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";
import { PlayIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface movieDetails {
  Title: string;
  Year: string;
  Runtime: string;
  Poster: string;
  Genre: string;
  Plot: string;
  Director: string;
  Writer: string;
  Actors: string;
  imdbRating: string;
  Trailer: string;
}

export default function MoviePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const [movieDetails, setMovieDetails] = useState<movieDetails | null>(null);

  const handlePlayTrailer = (trailerUrl: string) => {
    window.open(trailerUrl, "_blank");
  };
  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  const fetchMovieDetails = async (imdbID: string) => {
    try {
      const apiUrl = `https://www.omdbapi.com/?apikey=896ecd8c&i=${imdbID}`;
      const res = await fetch(apiUrl);
      if (res.ok) {
        const data = await res.json();
        setMovieDetails(data);
      } else {
        console.error("Failed to fetch movie details");
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };
  return (
    <div className="mt-6 mb-6 ml-6">
      <CardDetails>
        <div className="">
          <h3 className=" text-4xl mt-5 font-extrabold text-black ml-3">
            {movieDetails.Title}
          </h3>
          <div className="flex-row gap-3 ml-3">
            {movieDetails.Year} {"."} {movieDetails.Runtime}
          </div>
          <div className="mt-2 flex flex-row ml-3">
            <Image
              src={movieDetails.Poster}
              alt={movieDetails.Title}
              width={250}
              height={450}
            />

            <div className=" ml-3 mt-2 flex flex-col flex-wrap">
              <div style={{ maxWidth: "fit-content" }}>
                <div
                  className="  rounded-lg p-1 outline "
                  style={{
                    display: "inline-block",
                  }}
                >
                  {movieDetails.Genre}
                </div>
              </div>
              <div
                className="text-black font-md mt-3 mb-2"
                style={{
                  borderBottom: "1px solid #ddd",
                  paddingBottom: "15px",
                }}
              >
                {movieDetails.Plot}
              </div>
              <div
                className="text-black font-md font-bold"
                style={{
                  borderBottom: "1px solid #ddd",
                  paddingBottom: "15px",
                }}
              >
                Directors{" "}
                <span className="text-blue-600 font-normal">
                  {movieDetails.Director}
                </span>
              </div>
              <div
                className="text-black font-md font-bold"
                style={{
                  borderBottom: "1px solid #ddd",
                  paddingBottom: "15px",
                }}
              >
                Writers{" "}
                <span className="text-blue-600 font-normal">
                  {movieDetails.Writer}
                </span>
              </div>
              <div
                className="text-black font-md font-bold"
                style={{
                  borderBottom: "1px solid #ddd",
                  paddingBottom: "20px",
                }}
              >
                Stars{" "}
                <span className="text-blue-600 font-normal">
                  {movieDetails.Actors}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardDetails>
    </div>
  );
}
