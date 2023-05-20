import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchUsers} from '../store/index';
import SkeletonLoader from './skeletonLoader';
function UserList(){
    const dispatch = useDispatch();
    const {isLoading,data,error} = useSelector((state)=>{
        return state.users;
    })
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

    return (<div>
        {isLoading && <SkeletonLoader times={4} className="h-10 w-full"/>}
        {data && data.map(u => <div key={u.id}>{u.name}</div>)}
        {error && <div>{error.message}</div>}
    </div>)
}

export default UserList;