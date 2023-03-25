import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovies } from '../../redux/slice/FavoritSlice';
import './Favorites.css';


function Favorites() {

    let list2 = useSelector(state => state.favorit)
    let dispach = useDispatch()
    // console.log(list2)
    let [title, setTitle] = useState([])
    let [link, Setlink] = useState(false)
    let [dataId, setDataId] = useState(null)
    const delet = (e) => {
        let newList = list2.favorit.filter(item => item.Title !== e)
        // console.log(newList);
        dispach(deleteMovies(newList))
    }

    let saveList = () => {
        let obj = {
            title: title,
            movies: list2.favorit
        }
        fetch("https://acb-api.algoritmika.org/api/movies/list", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj),
        })
            .then(res => res.json())
            .then(data => {
                setDataId(data.id);
                Setlink(true)
            })
    }
    return (
        <div className="favorites">
            <input className="favorites__name" onChange={(e) => setTitle(e.target.value)} />
            <table>
                <tbody>
                    {list2.favorit.map((movie, index) => <tr key={index}>
                        <td className='favoritImgTd'><img className='favoritImg' src={movie.Poster} alt='dsf' /></td>
                        <td className='favoritTd'>{movie.Title}</td>
                        <td className='favoritTd'>{movie.Year}</td>
                        <td><button className='favoritBtn' onClick={() => delet(movie.Title)}>x</button></td>
                    </tr>)}
                </tbody>
            </table>

            {link ? <a href={`/list/${dataId}`}>Go to : {title} film list</a> :
                title.length && list2.favorit.length ?
                    <button onClick={saveList} type="button" className="favorites__save">Сохранить список</button> :
                    <button onClick={saveList} disabled type="button" className="favorites__save">Сохранить список</button>
            }
        </div>
    )
}


export default Favorites;