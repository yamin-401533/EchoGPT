interface ApiResponse {
  message: string;
}

export async function callChatAPI(message: string): Promise<ApiResponse> {
  const response = await fetch('/api/echoGPT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return await response.json();
}