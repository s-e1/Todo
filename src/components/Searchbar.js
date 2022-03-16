const Searchbar = ({ filterUsers, openAddUser }) => {

    return (
        <div>
            <span>Search</span>
            <input onChange={(e) => filterUsers(e.target.value)} />
            <button style={{ float: "right" }} onClick={openAddUser}>Add</button>
        </div>
    )
}
export default Searchbar;