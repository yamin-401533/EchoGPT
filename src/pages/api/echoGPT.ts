import { NextApiRequest, NextApiResponse } from 'next';

interface ApiResponse {
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // Here you would typically call your GPT model or service to get a response
    // For demonstration, we'll just echo the message back
    const responseMessage = `Echo: ${message}`;

    res.status(200).json({ message: responseMessage });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}