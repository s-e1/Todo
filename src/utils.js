import axios from "axios";

export const getUsersData = async () => {
    let rawUsersData = await axios.get("https://jsonplaceholder.typicode.com/users");
    let users = rawUsersData.data.map(x => {
        const { id, name, email } = x;
        const { street, city, zipcode } = x.address;
        return { id, name, email, street, city, zipcode }
    })
    return users;
}
export const getTodosData = async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    let todos = res.data.reduce((prev, curr) => {
        if (!prev[curr.userId]) {
            prev[curr.userId] = [curr];
        } else {
            prev[curr.userId].push(curr);
        }
        return prev;
    }, {})
    return todos;
}
export const getPostsData = async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    let posts = res.data.reduce((prev, curr) => {
        if (!prev[curr.userId]) {
            prev[curr.userId] = [curr];
        } else {
            prev[curr.userId].push(curr);
        }
        return prev;
    }, {})
    return posts;
}
