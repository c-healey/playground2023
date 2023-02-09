import { useState } from "react";
import Button from "./Button";

import { HeartIcon, SpinnerIcon } from "./icons.js";
import "./LikeButton.scss";
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const LikeButton: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [state, setState] = useState("unlike");

  const handleClick = () => {
    const action = state;
    setState("loading");
    postData(`https://www.greatfrontend.com/api/questions/like-button`, {
      action: action,
    })
      .then((data) => {
        setState(action === "like" ? "unlike" : "like"); // JSON data parsed by `data.json()` call
      })
      .catch((error) => {
        setState(action);
        console.log({ error });
      });
  };
  return (
    <div className={`like-button ${className}`}>
      <Button className={`Button ${state}`} onClick={() => handleClick()}>
        {state === "loading" ? <SpinnerIcon /> : <HeartIcon />} Like
      </Button>
    </div>
  );
};
export default LikeButton;
