import { useState } from "react";
import './User.css';

const User = ({ data, completed, filterById, selectedId, updateUser, deleteUser }) => {
    const [user, setUser] = useState(data);
    const [displayAddress, setDisplayAddress] = useState(false);

    return (
        <form className="user-form" style={{
            borderColor: completed ? "green" : "red",
            backgroundColor: selectedId === data.id ? "mistyrose" : "white"
        }} >
            <span className="more-data" onClick={() => { filterById(data.id) }}>Id: {data.id}</span>
            <div>Name:
                <input value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
            </div>
            <div>Email:
                <input value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
            </div>

            <div className="spread-user">
                
                <span className="more-data" onMouseOver={() => setDisplayAddress(true)}
                    onClick={() => setDisplayAddress(false)}>
                    Other data
                </span>

                {displayAddress &&
                    <div className="other-data">
                        <div>Street:
                            <input value={user.street} onChange={e => setUser({ ...user, street: e.target.value })} />
                        </div>
                        <div>City:
                            <input value={user.city} onChange={e => setUser({ ...user, city: e.target.value })} />
                        </div>
                        <div>Zip Code:
                            <input value={user.zipcode} onChange={e => setUser({ ...user, zipcode: e.target.value })} />
                        </div>
                    </div>
                }

                <button type="button" onClick={() => updateUser(user)}>Update</button>
                <button type="button" onClick={() => deleteUser(data.id)}>Delete</button>
            </div>
        </form>
    )
}
export default User;