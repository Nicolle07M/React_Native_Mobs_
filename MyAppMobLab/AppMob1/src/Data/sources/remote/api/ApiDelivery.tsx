import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.20.174:3202/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export {ApiDelivery};