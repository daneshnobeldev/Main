import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store/index';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumList from './AlbumList';
function UserListItem({ user }) {
    const [isLoading, error, goDeleteUser] = useThunk(removeUser);
    const handleDelete = () => {
        ;
        goDeleteUser(user)
    }

    const header = <>
        <div className='flex gap-x-4 align-center'>
            <Button onClick={handleDelete} loading={isLoading}
                danger
            ><GoTrashcan />
            </Button>
            {user.name}
        </div>
       
    </>
    return (


        <ExpandablePanel header={header}>
            <AlbumList  user={user} />
        </ExpandablePanel>
    )
}

export default UserListItem;