import { useAppSelector } from "../redux/hooks";
import FavouriteMovie from "./FavouriteMovie";

const FavouritesPage = () => {
  const favouritesList = useAppSelector((state) => state.favourites.favourites);

  return (
    <div className="listContainer">
      {favouritesList &&
        favouritesList.map((item) => {
          return <FavouriteMovie key={item.imdbID} item={item} />;
        })}
    </div>
  );
};

export default FavouritesPage;
