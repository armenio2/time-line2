import axios from 'axios';

export default async function GetUserList() {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
}