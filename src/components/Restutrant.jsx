import Card from "./Card";
import { useState } from "react";

const Restutrant = ({recipes}) => {
  
  return (
    <div className="container mx-auto">
      {/* <button
        onClick={() => {
          const list = karachiRestaurants.filter(
            (karachiRestaurants) => karachiRestaurants.rating >= 4.7
          );
          setkarachiRestaurants(list);
        }}
      >
        Top rated{" "}
      </button> */}
      <div className="restTiles container mx-auto">
        {recipes.map((data) => (
          <Card
            key={data.id} data={data} 
          />
        ))}
      </div>
    </div>
  );
};

export default Restutrant;
