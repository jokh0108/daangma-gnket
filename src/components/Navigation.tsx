import React from 'react';
import {
  IoChatbubblesOutline,
  IoHomeOutline,
  IoLocationOutline,
  IoNewspaperOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import Footer from './Footer';
import NavigationMenu from './NavigationMenu';

const menus = [
  { icon: <IoHomeOutline />, menu: '홈', path: '/' },
  {
    icon: <IoNewspaperOutline />,
    menu: '동네생활',
    path: '/town-life',
  },
  { icon: <IoLocationOutline />, menu: '내 근처', path: '/my-nearby' },
  { icon: <IoChatbubblesOutline />, menu: '채팅', path: '/chat' },
  { icon: <IoPersonOutline />, menu: '나의 당마', path: '/me' },
];

function Navigation() {
  return (
    <Footer>
      <div className="Navigation">
        {menus.map(({ icon, menu, path }) => (
          <NavigationMenu icon={icon} menu={menu} path={path} />
        ))}
      </div>
    </Footer>
  );
}

export default Navigation;
