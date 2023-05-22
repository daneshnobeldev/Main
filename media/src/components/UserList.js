import { fetchUsers, addUser } from "../store";
import Button from './Button';
import Skeleton from "./Skeleton";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useThunk } from "../hooks/use-thunk";
import UserListItem from './UserListItem';

function UserList() {


    const [isLoadingUsers, loadUsersError, goFetchUsers] = useThunk(fetchUsers);
    const [isLoadingCreateUsers, createUserError, goCreateUser] = useThunk(addUser);

    const { data } = useSelector((state) => {
        return state.users;
    });
    useEffect(() => {
        goFetchUsers();
    }, [goFetchUsers]);

    const handleAddUser = () => {
        goCreateUser();
    }

    let content;

    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" />
    }
    else if (loadUsersError) {
        content = <h3>{loadUsersError}</h3>;
    }

    else if (data.length > 0) {
        content = data.map(u =>
           
                <UserListItem key={u.id} user={u} />
           )
    }

    return (
        <div className="m-2">
            <div className="flex justify-between p-5 m-2 align-center">
                <span className="font-bold">Users</span> : <Button  loading={isLoadingCreateUsers} primary onClick={handleAddUser}>Add User</Button>
            </div>
            {content}
        </div>
    )
}

export default UserList;