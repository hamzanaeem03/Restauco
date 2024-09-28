import { Rating } from "@mui/material";

const Card = ({ data }) => {
  const { id, name, difficulty, caloriesPerServing, rating, cuisine, image } =
    data;
  // console.log(id)
  return (
    <div className="p-4 xl:w-1/5 lg:w-1/4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className=" w-full opacity-80 object-contain object-center"
          src={image}
          alt="blog"
        />
        <div className="p-6">
          <Rating name="read-only" value={rating} readOnly />

          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {name}
          </h1>

          <div className="flex items-center flex-wrap ">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {cuisine}
            </h2>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <img src="/flames.png"></img>
              {caloriesPerServing}{" "}
            </span>
            <span  style={{
                color: difficulty === "Easy" ? "green" : 
                       difficulty === "Medium" ? "orange" : 
                       difficulty === "Hard" ? "red" : "black"
              }}  className=" inline-flex items-center leading-none text-sm">
              {difficulty}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
