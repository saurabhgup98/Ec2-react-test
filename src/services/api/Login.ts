// api/users.ts

import axios from 'axios';

const BASE_URL = 'http://localhost:8080/nessa-store'; // You can also manage this URL dynamically

const login = async (credentials: { email: string, password: string }) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, credentials);
    return response.data;
  } catch (error:any) {
    throw new Error(error.response?.data?.message || error.response?.data?.message);
  }
};

export { login };
