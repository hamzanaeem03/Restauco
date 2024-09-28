import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const TopRatedRecipes = ({ recipes }) => {
  const [topRatedRecipes, setTopRatedRecipes] = useState([]);

  const filterTopRatedRecpies = () => {
    const list = recipes.filter((recipe) => recipe.rating >= 4.9);
    setTopRatedRecipes(list);
  };
  setTimeout(() => {
    filterTopRatedRecpies();
  }, 500);
  return (
    <div>
      <div className="container mx-auto flex justify-between">
        <h2 className="text-2xl font-bold text-[#4D312C]">Top Rated Recipes</h2>
        <Link to={'/recipes'}>
        <button
          className="text-[#FF6347] text-lg"
          // onClick={filterTopRatedRecpies}
        >
          See All
        </button>
        </Link>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {topRatedRecipes?.length > 0 ? (
              topRatedRecipes.map((data) => <Card key={data.id} data={data} />)
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopRatedRecipes;
