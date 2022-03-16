import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import User from "./User";
import "./MainScreen.css";

const MainScreen = ({ openAddUser, users, completedTodos, filterById, selectedId, updateUser, deleteUser }) => {
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        setFilteredUsers(users)
    }, [users])

    const filterUsers = (str) => {
        if (str === "") {
            setFilteredUsers(users);
        } else {
            str = str.toLowerCase();
            const filteredData = users.filter(user => {
                return user.name.toLowerCase().includes(str) || user.email.toLowerCase().includes(str);
            })
            setFilteredUsers(filteredData);
        }
    }
    return (
        <div className="left-side">
            <Searchbar filterUsers={filterUsers} openAddUser={openAddUser} />
            <div>
                {filteredUsers.map((user) => {
                    let completed = completedTodos[user.id];
                    return <User key={user.id} data={user} completed={completed} filterById={filterById}
                        selectedId={selectedId} updateUser={updateUser} deleteUser={deleteUser} />
                })}</div>
        </div>
    )
}
export default MainScreen;