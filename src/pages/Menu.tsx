import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="title">
        <img className="img" src="/public/video-img.jpeg"></img>IMDB Searcher
      </div>
      <div className="menu">
        <NavLink className="menu__item" to="/">
          Main
        </NavLink>
        <NavLink className="menu__item" to="/favourites">
          Favourites
        </NavLink>
      </div>
    </>
  );
}
