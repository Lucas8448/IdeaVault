"use client"

import React, { useState } from 'react';
import { useWebSocket } from '@/components/context/Socket';

const NewPage = () => {
  const { sendMessage } = useWebSocket();
  const [room, setRoom] = useState('');
  const [password, setPassword] = useState('');

  const createRoom = () => {
    sendMessage('CREATE_ROOM', JSON.stringify({ room, password }));
    setRoom('');
    setPassword('');
  };

  return (
    <div>
      <h1>Create a Brainstorming Session</h1>
      <input
        type="text"
        placeholder="Room Name"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <input
        type="password"
        placeholder="Set a Room Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={createRoom}>Create Room</button>
      {room && (
        <p>Room {room} created. Share this room name and password with participants.</p>
      )}
    </div>
  );
};

export default NewPage;


