// pages/choose.tsx

import React from 'react';
import Link from 'next/link';

const ChoosePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Brainstorming App</h1>
      <p>Start by choosing an option below:</p>
      <div style={{ marginTop: '20px' }}>
        <Link href="/portal/session/new">
          new
        </Link>
        <Link href="/portal/session/join">
          join
        </Link>
      </div>
    </div>
  );
};

export default ChoosePage;