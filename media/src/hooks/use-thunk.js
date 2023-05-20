import {useState,useCallback} from 'react';
import {useDispatch} from 'react-redux';

export function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const d = useDispatch();

   const dispatch = useCallback((arg) => {
        setIsLoading(true);
        d(thunk(arg))
        .unwrap()
        .catch(err => setError(err))
        .finally(() => setIsLoading(false))

    }, [d,thunk])

    return [isLoading,error,dispatch]
}