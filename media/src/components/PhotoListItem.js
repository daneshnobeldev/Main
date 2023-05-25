import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from '../store';

function PhotoListItem({ photo }) {
    const [goDeletePhoto,results] = useRemovePhotoMutation();
    const handleDelete = () => {
        goDeletePhoto(photo);

    }
    return (
        <div key={photo.id} className="relative cursor-pointer m-2">
            <img className="h-20 w-20" src={photo.url} alt={photo.id} />
            <div className="absolute inset-0 flex flex-row items-center  hover:bg-gray-200 opacity-0 hover:opacity-80 justify-center">
                <GoTrashcan onClick={handleDelete} className="text-3xl hover:visible" />
            </div>

        </div>
    )

}

export default PhotoListItem;