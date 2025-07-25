import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from './pages/Recipes';
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";
import ScrollToTop from "./components/ScrollToTop";
import Favorites from "./pages/Favorites";


const AppWrapper = () => {
  const location = useLocation();

  const showNavbar = location.pathname !== "/";

  return (
    <>
      {showNavbar && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
