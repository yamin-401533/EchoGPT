# Next.js GPT Chat Application

This project is a chat application built with Next.js that integrates a GPT-based chat functionality. Users can sign in, sign up, and interact with a chat interface powered by a backend API.

## Features

- User authentication with sign-in and sign-up forms.
- Real-time chat interface with message history.
- Light and dark theme toggle.
- Responsive design for various screen sizes.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nextjs-gpt-chat-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nextjs-gpt-chat-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

Then, start the production server:

```bash
npm start
```

### API Endpoints

The application includes an API endpoint for handling chat messages:

- `POST /api/echoGPT`: Sends a chat message and receives a response.

### Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for details.