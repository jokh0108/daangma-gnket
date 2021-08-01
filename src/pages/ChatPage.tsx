import React from 'react';

import Header from '../components/Header';
import MainTemplate from '../components/MainTemplate';

function ChatPage() {
  return (
    <MainTemplate>
      <Header leftChild={<div>채팅</div>} />
      <div>Chat Page</div>
    </MainTemplate>
  );
}

export default ChatPage;
