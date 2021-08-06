import React from 'react';

import Header from '../components/Header';
import MainTemplate from '../components/MainTemplate';
import Navigation from '../components/Navigation';

function ChatPage() {
  return (
    <MainTemplate
      header={<Header leftChild={<div>채팅</div>} />}
      main={<div>Chat Page</div>}
      footer={<Navigation />}
    />
  );
}

export default ChatPage;
