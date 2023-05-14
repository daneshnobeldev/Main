import { useState } from 'react';
import { addSong, removeSong } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { GoX } from 'react-icons/go';


function MusicPlaylist() {

    const dispatch = useDispatch();
    const songs = useSelector(state => { return state.songs });
    const [song, setSong] = useState('');
    const handleSongOnChange = (event) => {
        setSong(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addSong(song));
        setSong(song => song = '');
    }

    const handleRemoveSong = (songName) => {
        dispatch(removeSong(songName))
    }



    return (
        <div className='w-fit mx-auto flex flex-col items-center p-5 m-5 border border-spacing-2 border-lime-500 rounded shadow-lg shadow-indigo-500/40'>
            <form onSubmit={handleSubmit}>
                <input
                    value={song}
                    onChange={handleSongOnChange}
                    className='bg-white border border-slate-300  focus:outline-none focus:border-lime-300 mr-3' />
                <button className='  bg-indigo-700 px-10 py-3 hover:bg-lime-400 text-white' type='submit'>+ Add Songs</button>
            </form>

            {songs.map(song => {
                return <div
                    key={() => { return (Math.random() * 10000) + 1 }}
                    className='w-full flex  gap-x-5 p-5 items-center justify-between'
                >
                    {song}
                    <GoX className='border border-spacing-2 bg-violet-700 text-2xl text-white' onClick={() => {
                        handleRemoveSong(song)
                    }} />
                </div>
            })}

        </div>
    )
}

export default MusicPlaylist;


