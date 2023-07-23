import { useNavigate } from "react-router";
import { fetchID } from "../redux/store/getMovieByIDSlice";
import { useAppDispatch } from "../redux/hooks";
import { TMovie } from "../redux/store/movieSlice";

type propsMovie = {
  item: TMovie;
};

const Movie = ({ item }: propsMovie) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (event: React.MouseEvent) => {
    navigate(`/:${item["imdbID"]}`);
    event.preventDefault();
    dispatch(fetchID(item["imdbID"]));
  };

  return (
    <div className="movieContainer" onClick={onSubmit}>
      <div className="posterWrap">
        <img className="poster" src={item["Poster"]}></img>
      </div>
      <div className="info">
        <h3>{item["Title"]}</h3>
      </div>
    </div>
  );
};

export default Movie;
