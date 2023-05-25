import { useDeleteAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import PhotoList from "./PhotoList";


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
        <ExpandablePanel header={header} >
        <PhotoList  album={album} />
        </ExpandablePanel>
    )
}

export default AlbumListItem;
