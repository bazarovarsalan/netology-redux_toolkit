import { useAppDispatch } from "../redux/hooks";
import { removeFromFavourites } from "../redux/store/favouritesSlice";
import { IImdbID } from "../redux/store/getMovieByIDSlice";

type props = {
  item: IImdbID;
};

const FavouriteMovie = ({ item }: props) => {
  const dispatch = useAppDispatch();

  const handler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(removeFromFavourites(item));
  };
  return (
    <div className="movieContainer">
      <div className="posterWrap">
        <button className="removeToFavourites" onClick={handler}>
          Remove from Favourites
        </button>
        <img className="poster" src={item.Poster}></img>
      </div>
      <div className="info">
        <h3>{item.Title}</h3>
      </div>
    </div>
  );
};

export default FavouriteMovie;
