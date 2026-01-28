# Real-Time Chat Application

A full-stack real-time chat application built with TypeScript, WebSockets, React, and Vite. This application enables users to communicate in real-time within specific chat rooms.

## Features

- **Real-Time Messaging**: Instant message delivery using WebSocket connections
- **Room-Based Chat**: Users can join specific chat rooms and communicate only with others in the same room
- **TypeScript**: Fully typed codebase for better reliability and developer experience
- **Modern Frontend**: Built with React 19 and Vite for fast development and optimized builds
- **Responsive UI**: Styled with Tailwind CSS for a modern, responsive design
- **Hot Module Replacement**: Vite's HMR for seamless development experience

## Project Structure

```
RealTime-chat-app/
├── chat-backend/          # WebSocket server
│   ├── src/
│   │   └── index.ts       # Main server file
│   ├── package.json       # Backend dependencies
│   └── tsconfig.json      # TypeScript configuration
│
└── chat-frontend/         # React frontend
    ├── src/
    │   ├── App.tsx        # Main app component
    │   ├── main.tsx       # Entry point
    │   ├── App.css        # App styles
    │   ├── index.css      # Global styles
    │   └── assets/        # Static assets
    ├── public/            # Public files
    ├── package.json       # Frontend dependencies
    ├── vite.config.ts     # Vite configuration
    ├── tsconfig.json      # TypeScript configuration
    └── index.html         # HTML template
```

## Technology Stack

### Backend
- **Node.js** with TypeScript
- **ws** (^8.19.0): WebSocket library for Node.js
- **TypeScript** (^5.9.3): Type-safe JavaScript

### Frontend
- **React** (^19.2.0): UI library
- **React DOM** (^19.2.0): React rendering engine
- **Vite** (^7.2.4): Build tool and dev server
- **Tailwind CSS** (^4.1.18): Utility-first CSS framework
- **TypeScript** (~5.9.3): Type safety
- **ESLint**: Code quality and linting

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd RealTime-chat-app
   ```

2. **Install Backend Dependencies**
   ```bash
   cd chat-backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../chat-frontend
   npm install
   ```

## Running the Application

### Start the Backend Server

```bash
cd chat-backend
npm run dev
```

The WebSocket server will start on `ws://localhost:8080`

### Start the Frontend Development Server

In a new terminal:
```bash
cd chat-frontend
npm run dev
```

The frontend will be available at `http://localhost:5173` (default Vite port)

### Build for Production

**Frontend:**
```bash
cd chat-frontend
npm run build
```

This generates optimized files in the `dist/` folder.

**Backend:**
```bash
cd chat-backend
npm run dev
```

## How It Works

### Backend Architecture

The backend runs a WebSocket server that:
1. Listens for incoming client connections on port 8080
2. Maintains a list of all connected users with their socket and assigned room
3. Routes incoming messages to users in the same room

### Message Protocol

Messages are transmitted as JSON objects with the following structure:

**Join Room:**
```json
{
  "type": "join",
  "payload": {
    "roomId": "room-name"
  }
}
```

**Send Message:**
```json
{
  "type": "chat",
  "payload": {
    "message": "Hello, everyone!"
  }
}
```

### Frontend Architecture

The frontend is a React application that:
1. Establishes a WebSocket connection to the backend
2. Allows users to join a specific chat room
3. Sends and receives messages in real-time
4. Displays messages from users in the same room

## Available Scripts

### Backend Scripts
- `npm run dev`: Compiles TypeScript and runs the server

### Frontend Scripts
- `npm run dev`: Starts the development server with HMR
- `npm run build`: Builds the application for production
- `npm run lint`: Runs ESLint to check code quality
- `npm run preview`: Previews the production build locally

## Code Quality

The project uses ESLint for maintaining code quality:

```bash
cd chat-frontend
npm run lint
```

## Current Limitations & Future Enhancements

### Current Limitations
- User disconnect handling is commented out (needs implementation)
- No user authentication or authorization
- No message persistence (in-memory only)
- No user list display per room
- No typing indicators

### Potential Enhancements
- ✅ Implement proper user disconnect handling
- ✅ Add user authentication
- ✅ Implement message history with database
- ✅ Add user presence indicators
- ✅ Add typing indicators
- ✅ Implement user profiles
- ✅ Add emoji support
- ✅ Implement message reactions
- ✅ Add file sharing capabilities
- ✅ Implement voice/video chat

## Configuration Files

### tsconfig.json
TypeScript configuration for type checking and compilation options.

### vite.config.ts
Vite configuration for bundling, plugins, and development server settings.

### eslint.config.js
ESLint rules for code quality and consistency in the frontend.

## Troubleshooting

### WebSocket Connection Refused
- Ensure the backend server is running on port 8080
- Check firewall settings
- Verify the correct WebSocket URL in the frontend

### Port Already in Use
- Change the port in the respective configuration
- Or kill the process using the port

### TypeScript Errors
- Ensure `npm install` was run in both directories
- Run `tsc -b` to compile TypeScript
- Check tsconfig.json settings

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open a pull request

## License

ISC

## Author

Created with ❤️ by Nikhil for real-time communication

---

For more information or support, please open an issue or contact the development team.
