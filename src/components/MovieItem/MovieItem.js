import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteMovies } from '../../redux/slice/FavoritSlice';
import './MovieItem.css';

function MovieItem({ Title, Year, Poster,imdbID }) {

    let list = useSelector(state => state.movies)
    let favoriteList=useSelector(state=>state.favorit)
    let dispach = useDispatch()

let choose = (e) => {
    let itemExists = false;
    favoriteList.favorit?.forEach((item) => {
      if (item.imdbID === e) {
        itemExists = true;
      }
    });
    if (!itemExists) {
      list.movies?.forEach((item) => {
        if (item.imdbID === e) {
          dispach(favoriteMovies(item));
        }
      });
    }
  };
    return (
   <div className='listFlex'>
         <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button onClick={() => choose(imdbID)} type="button" className="movie-item__add-button">Добавить в список</button>
            </div>
        </article>
   </div>
   
    )
}

export default MovieItem;