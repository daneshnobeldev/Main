import { useFetchAlbumsQuery } from "../store";
import { GoSync } from 'react-icons/go';

function AlbumList({ user }) {
    debugger;
    const {data, error, isLoading} = useFetchAlbumsQuery(user);
    console.log(data,error,isLoading);
    let content;

    if (isLoading) {
        content = <div>
            <GoSync className="animate-spin" />
        </div>
    }
    else if (error) {
        content = <div>{`Error fetching albums ${error.message}`}</div>
    }
    else if (data.length === 0) {
        content = <div>No Albums found</div>
    }
    else if (data && data.length > 0) {
        content = data.map(x => {
            return (
                <div >{x.name} </div>
            )
        })
    }


return content;
}

export default AlbumList;