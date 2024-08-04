import React from "react";
import Card from "./Card.jsx";
import Data from "../Data.js";

const Home = () => {
  return (
    <div>
      <h2 className="my-4 text-center text-2xl font-semibold">Posts</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Data.map((obj) => (
          <Card key={obj.id} id={obj.id} title={obj.title} body={obj.body} />
        ))}
      </div>
    </div>
  );
};

export default Home;
