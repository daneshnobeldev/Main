import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import { GoSync } from 'react-icons/go';
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { faker } from "@faker-js/faker";

function AlbumList({ user }) {
    debugger;
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();
    console.log(results);

   

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
            const header = <div>{x.title}</div>
            return (
                <ExpandablePanel key={x.id} header={header} >
                 <div >Pictures will be displayed here </div>
            </ExpandablePanel>
              
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
            <Button primary className="self-end mb-2" onClick={() => {
                handleAddAlbum(user);
            }}>+ Add Album</Button>
            {content}
        </>
    );
}

export default AlbumList;