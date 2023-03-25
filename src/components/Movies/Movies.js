// import React, { Component, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';


function Movies() {
    const {movies} = useSelector(state=> state.movies)
    return (
        <div className="movies">
            {movies.map((movie) => (
                <div className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </div>
            ))}
        </div>
    )
}

export default Movies