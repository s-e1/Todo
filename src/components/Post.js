const Post = ({ data }) => {
    return (
        <div style={{ border: "blue solid 2px", padding: "5px" }}>
            <div>Title: {data.title}</div>
            <div>Body: {data.body}</div>
        </div>
    )
}
export default Post;