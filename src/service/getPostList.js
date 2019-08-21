import axios from 'axios';

export default async function GetPostList(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.data)
}