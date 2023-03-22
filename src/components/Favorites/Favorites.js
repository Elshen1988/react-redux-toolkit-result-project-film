// import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import './Favorites.css';


function Favorites() {
    let list2=useSelector(state=>state.favorite)
    // const [state, setSate] = useState(list2.favorite)
console.log(list2)
    return (
        <div className="favorites">
            <input  className="favorites__name" />
            <ul className="favorites__list">
                {/* {list2.favorite?.map((movie,index) =><li key={index}>{movie.item.Title}</li>)} */}
            </ul>
            <button type="button" className="favorites__save">Сохранить список</button>
        </div>
    )
}


export default Favorites;