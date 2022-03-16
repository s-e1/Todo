import { useEffect, useState } from "react";
import { getUsersData, getTodosData, getPostsData } from "./utils";
import MainScreen from "./components/MainScreen";
import SideScreen from "./components/SideScreen";
import AddUser from "./components/AddUser";
import "./App.css"

function App() {
    const [users, setUsers] = useState([]);
    const [todos, setTodos] = useState({});
    const [posts, setPosts] = useState({});
    const [completedTodos, setCompletedTodos] = useState([]);

    const [displayAddUser, setDisplayAddUser] = useState(false);
    const [displaySide, setDisplaySide] = useState(false);
    const [selectedId, setSelectedId] = useState();

    // get all the data at program's start
    useEffect(() => {
        let usersData = getUsersData();
        let todosData = getTodosData();
        let postsData = getPostsData();
        Promise.all([usersData, todosData, postsData]).then((values) => {
            setUsers(values[0]);
            setTodos(values[1]);
            setPosts(values[2]);
        });
    }, []);

    // determine which users completed all their todos
    useEffect(() => {
        let obj = {};
        for (const user in todos) {
            let isCompleted = todos[user].every(item => item.completed === true);
            obj[user] = isCompleted;
            setCompletedTodos(obj);
        }
    }, [todos]);

    // select which user's details will be displayed in side screen
    const filterById = (id) => {
        setSelectedId(id);
        setDisplayAddUser(false);
        setDisplaySide(true);
    }

    // mark todo as completed
    const markComplete = (userId, todoId) => {
        let item = todos[userId].find(item => item.id === todoId);
        item.completed = true;
        setTodos({ ...todos });
    }

    //open add user form
    const openAddUser = () => {
        setDisplaySide(false);
        setDisplayAddUser(true);
        setSelectedId(undefined);
    }

    //close add user form
    const closeAddUser = () => {
        setDisplayAddUser(false);
    }

    const saveNewUser = (user) => {
        setDisplayAddUser(false);
        let id = users.at(-1).id + 1;
        user.id = id;
        setUsers([...users, user]);
        setTodos({ ...todos, [id]: [] });
        setPosts({ ...posts, [id]: [] });
    }

    const updateUser = obj => {
        let newUsers = users.map(user => user.id === obj.id ? obj : user);
        setUsers(newUsers);
    }

    const deleteUser = (id) => {
        let newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);

        const newTodos = { ...todos };
        delete newTodos[id];
        setTodos(newTodos);

        const newPosts = { ...posts };
        delete newPosts[id];
        setTodos(newPosts);

        setDisplaySide(false);
    }

    const saveTodo = obj => {
        let userTodos = [...todos[obj.userId]];
        if (userTodos[0]) {
            let id = userTodos.at(-1).id + 1;
            obj.id = id;
        } else {
            obj.id = 1;
        }
        userTodos.push(obj);
        let newTodos = { ...todos };
        newTodos[obj.userId] = userTodos;
        setTodos(newTodos);
    }

    const savePost = obj => {
        let userPosts = [...posts[obj.userId]];
        if (userPosts[0]) {
            let id = userPosts.at(-1).id + 1;
            obj.id = id;
        } else {
            obj.id = 1;
        }
        userPosts.push(obj);
        let newPosts = { ...posts };
        newPosts[obj.userId] = userPosts;
        setPosts(newPosts);
    }

    return (
        <div>
            <MainScreen openAddUser={openAddUser} users={users} completedTodos={completedTodos} filterById={filterById} selectedId={selectedId} updateUser={updateUser} deleteUser={deleteUser} />

            {displaySide &&
                <SideScreen selectedId={selectedId} todos={todos[selectedId]} posts={posts[selectedId]} markComplete={markComplete} saveTodo={saveTodo} savePost={savePost} />}

            {displayAddUser && <AddUser saveNewUser={saveNewUser} closeAddUser={closeAddUser} />}
        </div>
    );
}

export default App;
