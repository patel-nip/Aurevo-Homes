import axios from 'axios';

const api = axios.create({
    BASE_URL = process.env.REACT_APP_API_URL
});

const api = {
    post: async (endpoint, data) => {
        const response = await fetch(`${BASE_URL}/api${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Something went wrong');
        }

        return response.json();
    },

    get: async (endpoint) => {
        const response = await fetch(`${BASE_URL}/api${endpoint}`);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Something went wrong');
        }

        return response.json();
    },
};

export default api;

