import React from 'react';
import {
  IoMenuOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from 'react-icons/io5';

import Header from '../components/Header';
import HeaderButtons from '../components/HeaderButtons';
import LocationSelector from '../components/LocationSelector';
import MainTemplate from '../components/MainTemplate';

function TownLifePage() {
  return (
    <MainTemplate>
      <Header
        leftChildren={<LocationSelector locations={['성수동', '삼성동']} />}
        rightChildren={
          <HeaderButtons
            buttons={[
              <IoSearchOutline />,
              <IoMenuOutline />,
              <IoNotificationsOutline />,
            ]}
          />
        }
      />
      <div>Town Life Page</div>
    </MainTemplate>
  );
}

export default TownLifePage;
