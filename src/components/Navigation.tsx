import React from 'react';
import NavigationMenu, { NavigationMenuProps } from './NavigationMenu';

interface Props {
  menus: NavigationMenuProps[];
}

function Navigation({ menus }: Props) {
  return (
    <div className="Navigation">
      {menus.map(({ icon, menu, path }) => (
        <NavigationMenu icon={icon} menu={menu} path={path} />
      ))}
    </div>
  );
}

export default Navigation;
