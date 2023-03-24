import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteMovies } from '../../redux/slice/FavoritSlice';
import './MovieItem.css';

function MovieItem({ Title, Year, Poster }) {

    let list = useSelector(state => state.movies)
    let favoriteList=useSelector(state=>state.favorit)
    let dispach = useDispatch()

let choose = (e) => {
    let itemExists = false;
    favoriteList.favorit?.forEach((item) => {
      if (item.Title === e) {
        itemExists = true;
      }
    });
    if (!itemExists) {
      list.movies?.forEach((item) => {
        if (item.Title === e) {
          dispach(favoriteMovies(item));
        }
      });
    }
  };
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button onClick={() => choose(Title)} type="button" className="movie-item__add-button">Добавить в список</button>
            </div>
        </article>
    )
}

export default MovieItem;