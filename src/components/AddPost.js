import { useState } from "react";
import './AddPost.css';

const AddPost = ({ selectedId, closeAddPost, savePost }) => {
    const [post, setPost] = useState({ userId: selectedId });
    const savingPost = (e) => {
        e.preventDefault();
        savePost(post);
        closeAddPost();
    }

    return (
        <form style={{ border: '2px solid black' }} onSubmit={savingPost}>
            <div>New Post - User {selectedId}</div>
            <div >
                <label>Title:
                    <input onChange={(e) => setPost({ ...post, title: e.target.value })} required />
                </label>
                <label style={{ float: "right" }}>Body:
                    <input onChange={(e) => setPost({ ...post, body: e.target.value })} required />

                </label>
                <div className="spread">
                    <button type="button" onClick={closeAddPost}>Cancel</button>
                    <button>Add</button>
                </div>
            </div>
        </form>
    )
}
export default AddPost;

