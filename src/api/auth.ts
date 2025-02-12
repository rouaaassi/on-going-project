import axios from 'axios';

const API_URL = 'https://localhost:3000/GraduationProject/users';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data.token;
  } catch (error) {
    console.error('Error during login', error);
    throw error;
  }
};
