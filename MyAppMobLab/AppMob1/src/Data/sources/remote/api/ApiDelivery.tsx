import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'https://192.168.20.174:3202/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export {ApiDelivery};