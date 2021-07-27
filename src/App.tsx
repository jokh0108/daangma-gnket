import React from 'react';
import {
  IoMenuOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from 'react-icons/io5';

import Header from './components/Header';
import HeaderButtons from './components/HeaderButtons';
import LocationSelector from './components/LocationSelector';
import MainTemplate from './components/MainTemplate';

function App() {
  return (
    <MainTemplate>
      <Header
        leftChildren={<LocationSelector locations={['성수동', '삼성동']} />}
        rightChildren={
          <HeaderButtons
            buttons={[
              // TODO: IconButton 혹은 Button 컴포넌트를 만들어서 클릭 이벤트 가능하게 만들기.
              <IoSearchOutline />,
              <IoMenuOutline />,
              <IoNotificationsOutline />,
            ]}
          />
        }
      />
      <div>메인뷰</div>
      <div>네비게이션 메뉴</div>
    </MainTemplate>
  );
}

export default App;
