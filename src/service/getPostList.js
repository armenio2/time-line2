import axios from 'axios';

const getPostList = async (id, setData, setError) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res => setData(res.data)).catch(e => setError(e))
}

export default getPostList;