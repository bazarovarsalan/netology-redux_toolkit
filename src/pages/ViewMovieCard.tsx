import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToFavourites } from "../redux/store/favouritesSlice";

const ViewMovieCard = () => {
  const [btnClickAdd, setBtnClickAdd] = useState(false);
  const dispatch = useAppDispatch();
  const movieInfo = useAppSelector((state) => state.movieID.movieData);
  const status = useAppSelector((state) => state.movieID.status);
  const error = useAppSelector((state) => state.movieID.error);

  const handler = (event: React.MouseEvent) => {
    event.preventDefault();
    if (movieInfo && !btnClickAdd) {
      dispatch(addToFavourites(movieInfo));
      setBtnClickAdd(true);
    }
  };

  return (
    <>
      {status === "loading" ? (
        <div className="lds-dual-ring"></div>
      ) : (
        movieInfo && (
          <div className="movieIDContainer">
            <img className="posterID" src={movieInfo?.Poster}></img>
            <div className="infoID">
              <button className="addToFavourites" onClick={handler}>
                {btnClickAdd ? "Added to Favourites" : "Add to Favourites"}
              </button>
              <h3 className="titleID">{movieInfo?.Title}</h3>
              <div className="mediablock">
                <span className="mediablockSpan">{movieInfo.Year}</span>
                <span className="mediablockSpan">
                  imdb:{movieInfo.imdbRating}
                </span>
                <span className="mediablockSpan">{movieInfo.Country}</span>
              </div>
              <div className="someInfo">
                <div>genre: {movieInfo.Genre}</div>
                <div>director: {movieInfo.Director}</div>
                <div>runtime: {movieInfo.Runtime}</div>
                <div>actors: {movieInfo.Actors}</div>
                <div>genre: {movieInfo.Awards}</div>
              </div>
              <div className="plot">{movieInfo.Plot}</div>
            </div>
          </div>
        )
      )}

      {error && <div className="error">{error}</div>}
    </>
  );
};

export default ViewMovieCard;
