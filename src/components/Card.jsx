import React from "react";
import { useNavigate } from "react-router-dom";

const imgSrc = "assets/img.svg";

const Card = ({ id, title, body }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/show-info", { state: { id, title, body, imgSrc } });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-lg border p-4 shadow-lg transition hover:bg-gray-200"
    >
      <div>
        <img src={imgSrc} alt="Post" className="h-auto w-full" />
      </div>
      <h3 className="text-xl font-bold">User Id: {id}</h3>
      <h3 className="text-lg font-semibold">Title: {title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Card;
