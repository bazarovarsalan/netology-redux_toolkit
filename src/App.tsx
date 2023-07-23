import "./App.css";
import Menu from "./pages/Menu";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ViewMovieCard from "./pages/ViewMovieCard";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:imdbID" element={<ViewMovieCard />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
