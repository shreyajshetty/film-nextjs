"use client";
import { Movie } from "@/app/movies";
import ModalCard from "./modalscard";
import { AddIcon, CloseIcon, StarIcon } from "@chakra-ui/icons";
import { HandThumbUpIcon } from "@heroicons/react/16/solid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface ModalTypes {
  isOpen: boolean;
  isClose: () => void;
  selectedContent: Movie | null;
}
const handleWatchListClick = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  e.stopPropagation();
  toast.success("Added to watch list");
};

const handleThumbsUpClick = (
  e: React.MouseEvent<SVGSVGElement, MouseEvent>
) => {
  e.stopPropagation();
  toast.success("+1 Message Added Successfully");
};

export const Modals: React.FC<ModalTypes> = ({
  isOpen,
  isClose,
  selectedContent,
}) => {
  if (!selectedContent) {
    return null;
  }

  return (
    <div
      className={isOpen ? "block modal-container" : "hidden"}
      onClick={isClose}
    >
      <ModalCard>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <img
              src={selectedContent.Poster}
              alt={selectedContent.Title}
              style={{
                width: "80px",
                height: "80px",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            />

            <div className="flex flex-col  ml-4" style={{ marginTop: "20px" }}>
              <div className="text-lg text-white font-semibold">
                {selectedContent.Title}
              </div>
              <div className="inline-flex gap-1">
                <div className="text-gray-500 text-sm">
                  {selectedContent.Year}
                </div>
                <div className="text-gray-500 text-sm">
                  {selectedContent.Runtime}
                </div>
                <div className="text-gray-500 text-sm">
                  {" "}
                  {selectedContent.Rated}
                </div>
              </div>
              <div className="text-gray-500 text-sm">
                <StarIcon style={{ color: "#FDE68A" }} /> {""}
                {selectedContent.imdbRating}/10
              </div>
            </div>
          </div>
          <div className="mt-2 ml-4 flex-row">
            <div className="text-white text-sm mt-5 ">
              {selectedContent.Plot}
            </div>
            <div className="text-white text-sm mt-1">
              Staring{" "}
              <span className="text-blue-500 ">{selectedContent.Actors}</span>
            </div>
            <div className="text-white text-sm mt-1">
              Language{" "}
              <span className="text-blue-500">{selectedContent.Language}</span>
            </div>
            <div className="flex">
              <button
                className="text-blue-500 text-md font-mono  p-1  hover:bg-white rounded-lg mt-5  mr-2"
                style={{ marginLeft: "380px" }}
                onClick={handleWatchListClick}
              >
                <AddIcon className="mr-2" />
                Watch List
              </button>
              <HandThumbUpIcon
                className="ml-2 w-6 h-6 text-blue-50 hover:text-blue-500 mt-6"
                onClick={handleThumbsUpClick}
              />
            </div>
          </div>
        </div>
      </ModalCard>
    </div>
  );
};
