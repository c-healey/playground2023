import { useState } from "react";
import { StarIcon } from "./icons";
import "./Stars.scss";
const Stars: React.FC<{ max: number; current: number }> = ({
  max,
  current,
}) => {
  const [rating, setRating] = useState(current);
  const [mouseover, setMouseover] = useState(current);
  return (
    <div className="stars">
      {Array(max)
        .fill("")
        .map((star, idx) => {
          return (
            <div
              className="stars-star"
              key={idx}
              data-value={idx + 1}
              onClick={(e) => setRating(idx + 1)}
              onMouseOver={(e) => setMouseover(idx + 1)}
              onMouseOut={(e) => setMouseover(rating)}
            >
              <StarIcon
                className={`stars-star-icon ${
                  idx < rating && mouseover >= rating
                    ? "stars-star-icon-filled"
                    : idx < mouseover
                    ? "stars-star-icon-filled"
                    : ""
                }`}
              />
            </div>
          );
        })}
    </div>
  );
};
export default Stars;
