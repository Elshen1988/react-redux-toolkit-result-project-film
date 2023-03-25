import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListPage.css';

function ListPage() {
    const [movies, setMovies] = useState([])
    const { id } = useParams()

   
        useEffect(() => {
             fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
              .then((response) => response.json())
              .then((data) => {
                setMovies(data.movies);
              })
            
          }, [id]);
        console.log(id);
   
    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {movies.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href={`https://www.imdb.com/title/${item.imdbID} `}target="_blank" rel="noreferrer" >{item.Title} ({item.Year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}


export default ListPage;