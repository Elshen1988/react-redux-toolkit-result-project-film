import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListPage.css';

function ListPage() {
    const [movies, setMovies] = useState([
        { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
    ])
    const { id } = useParams()

    useEffect(() => {
        // fetch()
        console.log(id);
    })
    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {movies.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href="https://www.imdb.com/title/tt0068646/" target="_blank" rel="noreferrer" >{item.title} ({item.year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}


export default ListPage;