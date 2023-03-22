import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getmovies } from '../../redux/slice';
import './SearchBox.css';

function SearchBox() {

    const [searchLine, setSearchLine] = useState("")
    const dispatch = useDispatch()
    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value)
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=278924d5`).then(res => res.json())
            .then(data => {
                if (data.Response === "True") {
                    dispatch(getmovies(data.Search))
                } else {
                    dispatch(getmovies([{ "Title": "Not Movie" }]))
                }
            })
    }
    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Искать
                </button>
            </form>
        </div>
    )
}



export default SearchBox;