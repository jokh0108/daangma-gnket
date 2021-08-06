import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { TiPencil } from 'react-icons/ti';
import { BiBarcodeReader } from 'react-icons/bi';

import Header from '../components/Header';
import HeaderButtons from '../components/HeaderButtons';
import MainTemplate from '../components/MainTemplate';
import Navigation from '../components/Navigation';

function MyNearbyPage() {
  return (
    <MainTemplate
      header={
        <Header
          leftChild={<div>내 근처</div>}
          rightChild={
            <HeaderButtons
              buttons={[
                <TiPencil />,
                <BiBarcodeReader />,
                <IoNotificationsOutline />,
              ]}
            />
          }
        />
      }
      main={<div>My Nearby Page</div>}
      footer={<Navigation />}
    />
  );
}

export default MyNearbyPage;
