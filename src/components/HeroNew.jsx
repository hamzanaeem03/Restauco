import { Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";

const HeroNew = () => {
  return (
    <section className="text-[#4D312C] body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow gap-4 md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font md:text-5xl lg:text-[4.5rem] xl:text-[5rem]  md:text-left leading-tight sm:text-4xl text-3xl mb-4 font-bold text-center text-[#4D312C]">
            Your Daily dish a food journey
          </h1>
          <Typography
            variant="p"
            className="font-bold text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left"
          >
            Reservations with restauco. are easy and just take a couple of
            minutes
          </Typography>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-[#FF6347] border-0 py-4 px-6 focus:outline-none font-bold rounded-full text-lg">
              <Link to="/recipes">View Recipes</Link>
            </button>
            <button className="ml-4 inline-flex gap-2 text-[#FF6347]  font-bold border-0 py-4 px-6 focus:outline-none  rounded text-lg">
              <PlayCircleOutlineIcon />
              Watch Videos
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg h-full lg:w-full md:w-1/2 w-2/5">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://preview.colorlib.com/theme/restauco/assets/img/hero/h1_hero1.jpg.webp"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
