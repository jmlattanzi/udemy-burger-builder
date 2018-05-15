import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-f6f92.firebaseio.com/'
});

export default instance;