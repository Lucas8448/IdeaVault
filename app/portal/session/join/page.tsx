"use client"

import React, { useState } from 'react';
import { useWebSocket } from '@/components/context/Socket';

const JoinPage = () => {
  const { sendMessage } = useWebSocket();
  const [room, setRoom] = useState('');
  const [password, setPassword] = useState('');

  const joinRoom = () => {
    sendMessage('JOIN_ROOM', JSON.stringify({ room, password }));
  };

  return (
    <div>
      <h1>Join a Brainstorming Session</h1>
      <input
        type="text"
        placeholder="Room Name"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
};

export default JoinPage;
