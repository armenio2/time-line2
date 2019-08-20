import axios from 'axios';

const getPostList = async (id, setData) => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res => setData(res.data))
}

export default getPostList;