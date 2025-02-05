import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    throw new Error('Error sending message');
  }
};
