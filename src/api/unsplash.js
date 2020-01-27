import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4272a97fab9c32255a70aa8b0fc617dda78014e7ed529c0e0f3680bffe7cdb90'
    }
});