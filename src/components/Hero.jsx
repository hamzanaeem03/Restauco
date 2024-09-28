import { Typography, Button, Rating, Avatar } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      <div className="w-full lg:w-3/5 h-full md:h-full bg-[#FDF4F2] flex items-center justify-center lg:px-10 p-5 md:p-0">
        <div className="flex h-full flex-col justify-center gap-3 sm:gap-5">
          <h1 className="text-3xl text-[#4D312C] sm:text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-bold text-center md:text-left leading-tight">
            Meet, Eat & Enjoy <br />
            the true taste
          </h1>
          <Typography
            variant="p"
            sx={{color:"#4D312C"}}
            className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left"
          >
            Reservations with restauco. are easy and just take a couple of
            minutes
          </Typography>
          <div className="flex justify-center md:justify-start gap-4">
            <Link to="/recipes">
            <Button
              variant="contained"
              sx={{
                borderRadius: "9999px",
                padding: {
                  xs: "10px 15px",
                  sm: "12px 18px",
                  md: "15px 22px",
                  lg: "18px 25px",
                },
                backgroundColor: "#FF6347",
                fontWeight: "bold",
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.85rem",
                  md: "1rem",
                  lg: "1.1rem",
                },
              }}
            >
              Our Menu
            </Button>
            </Link>
            <Button
              variant="text"
              sx={{
                color: "#FF6347",
                fontWeight: "bold",
                display: "flex",
                gap: "5px",
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.85rem",
                  md: "1rem",
                  lg: "1.1rem",
                },
              }}
            >
              <PlayCircleOutlineIcon />
              Watch Videos
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex w-full lg:w-2/5 h-1/2 lg:h-full bg-[url('https://preview.colorlib.com/theme/restauco/assets/img/hero/h1_hero1.jpg.webp')] bg-cover items-end justify-center p-4 lg:p-10">
        <div className="w-full sm:w-4/5 lg:w-4/5 xl:w-3/5 h-1/5 bg-white rounded-md shadow-lg flex items-center justify-evenly p-3">
          <Avatar
            alt="Billy"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2w_bADOkCd-crL7kYomj8CG7bvFyk3iFF_3iTaPp8B6UlQ5e1MB5kkpDrgqCjmRFPqftVfTpRvmL5Qt33ARxqj5FKwHZPBYgGBDOwxw"
          />
          <div className="">
            <Typography variant="p" className="text-sm sm:text-base">
              &quot;Simple and easy to cook recipes&quot;
            </Typography>
            <div className="flex gap-2 items-center">
              <Rating name="read-only" value={5} readOnly /> -
              <Typography variant="p" className="text-sm sm:text-base">
                Bill Gates
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
