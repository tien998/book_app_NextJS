import io from 'socket.io-client';

const socket = io("ws://localhost:3001"); // Thay đổi URL server nếu cần thiết

export default socket;