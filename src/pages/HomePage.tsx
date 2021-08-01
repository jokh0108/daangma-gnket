import React from 'react';
import {
  IoChatbubblesOutline,
  IoHomeOutline,
  IoLocationOutline,
  IoMenuOutline,
  IoNewspaperOutline,
  IoNotificationsOutline,
  IoPersonOutline,
  IoSearchOutline,
} from 'react-icons/io5';

import Header from '../components/Header';
import HeaderButtons from '../components/HeaderButtons';
import LocationSelector from '../components/LocationSelector';
import MainTemplate from '../components/MainTemplate';
import Navigation from '../components/Navigation';

function HomePage() {
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
      {/* TODO: Router 기능 추가 */}
      <Navigation
        menus={[
          { icon: <IoHomeOutline />, menu: '홈', path: '/' },
          {
            icon: <IoNewspaperOutline />,
            menu: '동네생활',
            path: '/town-life',
          },
          { icon: <IoLocationOutline />, menu: '내 근처', path: '/my-nearby' },
          { icon: <IoChatbubblesOutline />, menu: '채팅', path: '/chat' },
          { icon: <IoPersonOutline />, menu: '나의 당마', path: '/me' },
        ]}
      />
    </MainTemplate>
  );
}

export default HomePage;
