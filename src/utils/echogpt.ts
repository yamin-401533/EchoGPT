import axios from 'axios';

const API_URL = 'https://platform.echogpt.live/api/v1/echo'; // Correct URL
const API_KEY = process.env.NEXT_PUBLIC_ECHOGPT_API_KEY;

export const fetchEchoGPTResponse = async (prompt: string) => {
  try {
    const response = await axios.post(
      API_URL,
      { prompt },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching EchoGPT response:', error);
    throw error;
  }
};