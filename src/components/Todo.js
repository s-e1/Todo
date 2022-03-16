const Todo = ({ data, markComplete }) => {
    return (
        <div style={{ border: "blue solid 2px", padding: "5px" }}>
            <div>Title: {data.title}</div>
            <div>
                <span> Completed: {'' + data.completed} </span>
                {!data.completed &&
                    <button
                        style={{ float: "right" }}
                        onClick={() => markComplete(data.userId, data.id)}>
                        Mark Completed
                    </button>}
            </div>
        </div>
    )
}
export default Todo;