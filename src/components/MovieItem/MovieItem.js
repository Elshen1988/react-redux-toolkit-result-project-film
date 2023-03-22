import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchmovies } from '../../redux/slice';
import './MovieItem.css';

function MovieItem({ Title, Year, Poster }) {
let list=useSelector(state=>state.movies)

let dispach=useDispatch()

// console.log(list2);
// console.log(list.favorite);

let search=(e)=>{

 list.movies?.map(item=>{
    if(item.Title===e){
        
    dispach(searchmovies(item))  
    }
 })
  
}

    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button onClick={()=>search(Title)}  type="button" className="movie-item__add-button">Добавить в список</button>
            </div>
        </article>
    )
}

export default MovieItem;