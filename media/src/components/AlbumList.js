import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Button from "./Button";
import { faker } from "@faker-js/faker";
import Skeleton from "./Skeleton";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
    debugger;
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    let content;

    if (isFetching) {
        content = <div>
           <Skeleton className="h-10 w-full" times={4} />
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
           console.log(x);
            return (
               <AlbumListItem album={x} key={x.id} />
              
            )
        })
    }

    const handleAddAlbum = () => {

        addAlbum({
            userId: user.id,
            title: faker.music.songName()
        })
    }


    return (
        <>
            <Button loading={results.isLoading} primary className="self-end mb-2" onClick={() => {
                handleAddAlbum(user);
            }}>+ Add Album</Button>
            {content}
        </>
    );
}

export default AlbumList;