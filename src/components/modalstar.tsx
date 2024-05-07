import { Cine, Movie, Tvseries } from "@/app/movies";
import React from "react";
import ModalCard from "./modalscard";
import StarRating from "./starRating";
import StarCard from "./starcard";

export interface ModalTypes {
  isOpen: boolean;
  isClose: () => void;
  selectedContent: Movie | Cine | Tvseries | null;
}
const handleStars = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.stopPropagation();
};
export const Modalstar: React.FC<ModalTypes> = ({
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
      <StarCard>
        <div className="flex flex-col items-center justify-center ml-14">
          <div className="text-xl mt-0 font-md text-yellow-400">RATE THIS</div>
          <div className="text-lg text-white font-md">
            {selectedContent.Title}
          </div>
          <div className="flex flex-row" onClick={() => handleStars}>
            <StarRating />
          </div>
          <button className="bg-slate-300 rounded-md px-12 mt-4 hover:bg-blue-500">
            Rate
          </button>
        </div>
      </StarCard>
    </div>
  );
};
