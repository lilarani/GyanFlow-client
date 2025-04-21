import { io } from 'socket.io-client';

const socket = io('https://gyanflow-server.onrender.com');
export default socket;
