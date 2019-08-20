import axios from 'axios';

const getUserList = async (setData, setError) => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => setData(res.data)).catch(e => setError(e))
}

export default getUserList;