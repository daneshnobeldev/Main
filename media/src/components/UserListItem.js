import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store/index';
import {useThunk} from '../hooks/use-thunk';
function UserListItem({ user }) {
    const [isLoading, error, goDeleteUser] = useThunk(removeUser);
    const handleDelete = () => {
        ;
        goDeleteUser(user)
    }

    return <div className="flex p-2 justify-between items-center"
        key={user.id}
    >
        <Button onClick={handleDelete} loading={isLoading}
            danger
        ><GoTrashcan />
        </Button>
        {user.name}
    </div>
}

export default UserListItem;