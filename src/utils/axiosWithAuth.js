import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
    return axios.create({
        headers: {
          authorization: `Bearer ${token}`
        },
        baseURL: 'http://localhost:5000/api/articles/',
      }); 
}

export default axiosWithAuth;