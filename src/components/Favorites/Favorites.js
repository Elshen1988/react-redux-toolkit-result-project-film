import { useDispatch, useSelector } from 'react-redux';
import { deleteMovies} from '../../redux/slice/FavoritSlice';
import './Favorites.css';


function Favorites() {
    let list2 = useSelector(state => state.favorit)
    let dispach=useDispatch()
    // console.log(list2)
    const delet=(e)=>{
      let newList=  list2.favorit.filter(item=>item.Title!==e)
// console.log(newList);
        dispach(deleteMovies(newList))
    }
    return (
        <div className="favorites">
            <input className="favorites__name" />
            <table>
                <tbody>
                    {list2.favorit.map((movie, index) => <tr key={index}>
                        <td className='favoritImgTd'><img className='favoritImg' src={movie.Poster} alt='dsf' /></td>
                        <td className='favoritTd'>{movie.Title}</td>
                        <td className='favoritTd'>{movie.Year}</td>
                        <td><button className='favoritBtn' onClick={()=>delet(movie.Title)}>x</button></td>
                    </tr>)}
                </tbody>
            </table>

            <button type="button" className="favorites__save">Сохранить список</button>
        </div>
    )
}


export default Favorites;