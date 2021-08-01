import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { TiPencil } from 'react-icons/ti';
import { BiBarcodeReader } from 'react-icons/bi';

import Header from '../components/Header';
import HeaderButtons from '../components/HeaderButtons';
import MainTemplate from '../components/MainTemplate';

function MyNearbyPage() {
  return (
    <MainTemplate>
      <Header
        leftChildren={<div>내 근처</div>}
        rightChildren={
          <HeaderButtons
            buttons={[
              <TiPencil />,
              <BiBarcodeReader />,
              <IoNotificationsOutline />,
            ]}
          />
        }
      />
      <div>My Nearby Page</div>
    </MainTemplate>
  );
}

export default MyNearbyPage;
