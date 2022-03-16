import { useState } from "react";
import './AddUser.css';

const AddUser = ({ saveNewUser, closeAddUser }) => {
    const [user, setUser] = useState({});
    const submitting = (e) => {
        e.preventDefault();
        saveNewUser(user);
    }

    return (
        <form className="right-side" onSubmit={submitting}>
            <div>Add New User</div>
            <div >
                <label>Name:
                    <input onChange={(e) => setUser({ ...user, name: e.target.value })} required />
                </label>
                <label style={{ float: "right" }}>Email:
                    <input onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                </label>
                <div className="spread" >
                    <button type="button" onClick={closeAddUser}>Cancel</button>
                    <button>Add</button>
                </div>
            </div>
        </form>
    )
}
export default AddUser;