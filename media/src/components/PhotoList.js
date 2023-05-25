import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotoListItem from "./PhotoListItem";
import Skeleton from "./Skeleton";

function PhotoList({ album }) {
    const { data, error, isFetching } = useFetchPhotosQuery(album);
    const [goAddPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        debugger;
        goAddPhoto(album)
    }
    let content;

    if (isFetching) {
        content = <Skeleton className="h-8 w-full" times={4} />
    }
    else if (error) {
        content = <div>Error fetching Photos!</div>
    }
    else if (data) {
        if (data.length === 0) {
            content = <div>No Photos found</div>
        }
        else if (data.length > 0) {
            content = data.map(photo => {
                return <PhotoListItem key={photo.id} photo={photo} />
            })

        }
    }
    return (
        <div >
            <div className="flex flex-row items-center justify-between">
                <div>{`Albums for ${album.title}`}</div>
                <Button primary loading={addPhotoResults.isLoading} onClick={handleAddPhoto} >+ Add Photo</Button>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-x-8">
            {content}
            </div>
        </div>
    )
}

export default PhotoList;