import { useState } from "react";
import Todo from "./Todo";
import Post from "./Post";
import AddTodo from "./AddTodo";
import AddPost from "./AddPost";
import "./SideScreen.css";

const SideScreen = ({ todos, posts, markComplete, selectedId, saveTodo, savePost }) => {
    const [displayTodos, setDisplayTodos] = useState(true);
    const [displayPosts, setDisplayPosts] = useState(true);
    const closeAddTodo = () => {
        setDisplayTodos(true);
    }
    const closeAddPost = () => {
        setDisplayPosts(true);
    }

    return (
        <div className="side-screen">
            {displayTodos ?
                <div style={{ border: '2px solid black' }}>
                    <div>
                        <span>Todos - User {selectedId}</span>
                        <button style={{ float: "right" }} onClick={() => setDisplayTodos(false)}>Add</button>
                    </div>
                    {todos?.length > 0 && todos.map((todo) => {
                        return <Todo key={todo.id} data={todo} markComplete={markComplete} />
                    })}
                </div> :
                <AddTodo selectedId={selectedId} closeAddTodo={closeAddTodo} saveTodo={saveTodo} />}

            {displayPosts ?
                <div style={{ border: '2px solid black', marginTop: "25px" }}>
                    <div>
                        <span>Posts - User {selectedId}</span>
                        <button style={{ float: "right" }} onClick={() => setDisplayPosts(false)}>Add</button>
                    </div>
                    {posts?.length > 0 && posts.map((post) => {
                        return <Post key={post.id} data={post} />
                    })}
                </div> :
                <AddPost selectedId={selectedId} closeAddPost={closeAddPost} savePost={savePost} />}
        </div>
    )
}
export default SideScreen;