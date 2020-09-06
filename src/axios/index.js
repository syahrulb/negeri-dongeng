import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.MIX_URL=='/'?'/api':process.env.MIX_URL+'/api',
    headers: {
        'X-Requested-With' : 'XMLHttpRequest',
        'Content-Type': 'application/json',
      }
});
export default instance
