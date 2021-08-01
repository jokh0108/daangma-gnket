import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

import Header from '../components/Header';
import HeaderButtons from '../components/HeaderButtons';
import MainTemplate from '../components/MainTemplate';

function MePage() {
  return (
    <MainTemplate>
      <Header
        leftChild={<div>나의 당마</div>}
        rightChild={<HeaderButtons buttons={[<IoSettingsOutline />]} />}
      />
      <div>Me Page</div>
    </MainTemplate>
  );
}

export default MePage;
