import { useState } from "react";
import { FaStar } from "react-icons/fa";
export default function StarRating() {
  const [rating, setRating] = useState<number | null>(null);
  const [rateColor, setRateColor] = useState<number | null>(null);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <>
            <label>
              <input
                type="radio"
                name="rate"
                value={currentRate}
                onClick={() => {
                  setRating(currentRate);
                }}
              />
              <FaStar
                size={30}
                color={
                  currentRate <=
                  (rateColor !== null
                    ? rateColor
                    : rating !== null
                    ? rating
                    : 0)
                    ? "#FFD700"
                    : "gray"
                }
              />
            </label>
          </>
        );
      })}
    </>
  );
}
