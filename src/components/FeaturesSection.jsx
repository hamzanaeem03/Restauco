import { Card, CardContent, Typography } from "@mui/material";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className=" rounded-full">
      <CardContent className="flex flex-col items-center text-center">
       

        <Typography variant="h6" className="font-bold text-lg mb-2">
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: "" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: BakeryDiningIcon,
      title: "Healthy Meal",
      description:
        "Making a reservation at Delicious restaurant is easy and takes just a couple of minutes.",
    },
    {
      icon: LunchDiningIcon,
      title: "Fast Food",
      description:
        "Making a reservation at Delicious restaurant is easy and takes just a couple of minutes.",
    },
    {
      icon: LocalCafeIcon,
      title: "Delicious Coffee",
      description:
        "Making a reservation at Delicious restaurant is easy and takes just a couple of minutes.",
    },
  ];

  return (
    <div className="bg-[#FDF4F2] ">
      <div className="container mx-auto px-4 py-10">
        {/* Wrapper for responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
