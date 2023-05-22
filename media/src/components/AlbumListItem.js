import { useDeleteAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";


function AlbumListItem({ album }) {
    const [goDeleteAlbum,result] = useDeleteAlbumMutation();
    const handleAlbumDelete = (album) => {
        console.log('deleted');
        goDeleteAlbum(album);
    };

    const header = <>
        <Button danger loading={result.isLoading}
        onClick={() => {
            handleAlbumDelete(album)
        }}
        >
            <GoTrashcan/></Button>
        {album.title}</>
    return (
        <ExpandablePanel key={album.id} header={header} >
            <div >Pictures will be displayed here </div>
        </ExpandablePanel>
    )
}

export default AlbumListItem;
