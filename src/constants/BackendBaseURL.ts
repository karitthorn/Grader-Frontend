import axios from "axios";

// export const BASE_URL = 'http://192.168.0.11:8000';
export const BASE_URL = String(import.meta.env.VITE_BACKEND_URL);
// axios.defaults.headers.common['account_id'] = localStorage.getItem('account_id') || null;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') || null;
