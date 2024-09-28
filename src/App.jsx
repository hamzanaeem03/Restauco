import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClippedDrawer from "./components/ClippedDrawer";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.recipes);
        setRecipes(data.recipes);
      });
  }, []);

  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/Recipes" element={<ClippedDrawer recipes={recipes} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
