import React from "react";
import { useLocation } from "react-router-dom";

const ShowInfo = () => {
  const location = useLocation();
  const { id, title, body, imgSrc } = location.state || {};

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-semibold">
        Details Page For Post With Id {id}
      </h2>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <img src={imgSrc} alt="Post" className="h-auto w-full" />
        </div>
        <h3 className="text-xl font-bold">User Id: {id}</h3>
        <h3 className="text-lg font-semibold">Title: {title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ShowInfo;
