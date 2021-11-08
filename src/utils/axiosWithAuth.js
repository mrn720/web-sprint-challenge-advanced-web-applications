import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
    return axios.create({
        headers: {
          authorization: `Bearer ${token}`
        }
      }); 
}

export default axiosWithAuth;