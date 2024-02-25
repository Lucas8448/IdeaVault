"use client"

import React, { useState } from 'react';
import { useWebSocket } from '@/components/context/Socket';

const SubmitIdeaPage = ({ params }: { params: { id: any } }) => {
  const { room } = params.id;
  const { sendMessage } = useWebSocket();
  const [idea, setIdea] = useState('');

  const submitIdea = () => {
    if (idea) {
      sendMessage('SEND_IDEA', JSON.stringify({ content: idea, room }));
      setIdea('');
    } else {
      alert("Please enter an idea.");
    }
  };

  return (
    <div>
      <h1>Submit Your Idea</h1>
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Your idea here..."
      />
      <button onClick={submitIdea}>Submit Idea</button>
    </div>
  );
};

export default SubmitIdeaPage;
