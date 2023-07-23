import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addValueInput } from "../redux/store/inputSlice";
import { fetchMovies } from "../redux/store/movieSlice";
import Movie from "./Movie";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const inputVal = useAppSelector((state) => state.inputValue.inputValue.value);
  const list = useAppSelector((state) => state.movieList.list);
  const status = useAppSelector((state) => state.movieList.status);
  const error = useAppSelector((state) => state.movieList.error);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    dispatch(addValueInput(value));
  };

  const onSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(fetchMovies(inputVal));
  };

  return (
    <>
      <form className="form">
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            name="filter"
            autoComplete="off"
            value={inputVal}
            onChange={onChangeHandler}
          />
          <button className="searchBtn" onClick={onSubmit}>
            Find!
          </button>
        </div>
      </form>
      <div className="listContainer">
        {status === "loading" ? (
          <div className="lds-dual-ring"></div>
        ) : list ? (
          list.map((item) => {
            return <Movie key={item.imdbID} item={item} />;
          })
        ) : (
          <div className="no-result">No results</div>
        )}
      </div>
      {error && <div>{error}</div>}
    </>
  );
};

export default HomePage;
