import axios from 'axios';

const getPostList = async (id, setData, setError) => {
    try {
        await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res => setData(res.data))
    } catch (error) {
        setError(error)
    }
}

export default getPostList;