import { useEffect } from "react";
import HeroNew from "../components/HeroNew";
import TopRatedRecipes from "../components/TopRatedRecipes";

const Home = ({ recipes }) => {
  return (
    <>
      <HeroNew />
      {/* <FeaturesSection /> */}
      <TopRatedRecipes recipes={recipes} />
    </>
  );
};

export default Home;
