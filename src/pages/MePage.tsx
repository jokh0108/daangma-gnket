import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

import Header from '../components/Header';
import HeaderButtons from '../components/HeaderButtons';
import MainTemplate from '../components/MainTemplate';
import Navigation from '../components/Navigation';

function MePage() {
  return (
    <MainTemplate
      header={
        <Header
          leftChild={<div>λμ λΉλ§</div>}
          rightChild={<HeaderButtons buttons={[<IoSettingsOutline />]} />}
        />
      }
      main={<div>Me Page</div>}
      footer={<Navigation />}
    />
  );
}

export default MePage;
