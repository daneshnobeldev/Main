import { useState } from 'react';
import { addMovie, removeMovie } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { GoX } from 'react-icons/go';


function MoviePlaylist() {

    const dispatch = useDispatch();
    const Movies = useSelector(state => { return state.movies });
    const [Movie, setMovie] = useState('');
    const handleMovieOnChange = (event) => {
        setMovie(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addMovie(Movie));
        setMovie(Movie => Movie = '');
    }

    const handleRemoveMovie = (MovieName) => {
        dispatch(removeMovie(MovieName))
    }



    return (
        <div className='w-fit mx-auto flex flex-col items-center p-5 m-5 border border-spacing-2 border-lime-500 rounded shadow-lg shadow-indigo-500/40'>
            <form onSubmit={handleSubmit}>
                <input
                    value={Movie}
                    onChange={handleMovieOnChange}
                    className='bg-white border border-slate-300  focus:outline-none focus:border-lime-300 mr-3' />
                <button className='  bg-indigo-700 px-10 py-3 hover:bg-lime-400 text-white' type='submit'>+ Add Movies</button>
            </form>

            {Movies.map(Movie => {
                return <div
                    key={() => { return (Math.random() * 10000) + 1 }}
                    className='w-full flex  gap-x-5 p-5 items-center justify-between'
                >
                    {Movie}
                    <GoX className='border border-spacing-2 bg-violet-700 text-2xl text-white' onClick={() => {
                        handleRemoveMovie(Movie)
                    }} />
                </div>
            })}

        </div>
    )
}

export default MoviePlaylist;


