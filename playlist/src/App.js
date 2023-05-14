import MusicPlaylist from './components/MusicPlaylist';
import MoviePlaylist from './components/MoviePlaylist';
import { useDispatch } from 'react-redux';
import { resetAction } from './store/store';

function App() {

    const dispatch = useDispatch();

    const handleReset = () => {

        dispatch(resetAction());
    }



    return (
       
            <div className='m-auto h-screen flex justify-center items-center'>
                <div className='flex w-1/2 flex-col 
                 border border-slate-200 shadow-sm shadow-slate-400/40
                 justify-center items-center 
                   cursor-pointer  px-3 py-3 '>
                    <div><button
                        className='outline-none bg-red-600 hover:bg-red-700 text-white focus:ring-4 focus:ring-red-300 font-medium text-sm px-10 py-2.5 m-2'
                        onClick={() => {handleReset()}}                        
                        >
                    
                        Reset
                    </button>
                    </div>
                    <MusicPlaylist />
                    <MoviePlaylist />
                </div>
            </div>
       
    )
}

export default App;