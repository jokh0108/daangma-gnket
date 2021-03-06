import React, { ReactNode } from 'react';
import CustomLink from './CustomLink';

export interface NavigationMenuProps {
  icon: ReactNode;
  menu: string;
  path: string;
}

function NavigationMenu({ icon, menu, path }: NavigationMenuProps) {
  return (
    <CustomLink className="NavigationMenu" to={path}>
      {/* TODO: 현재 경로에 따라 filled 아이콘 적용  */}
      <div className="NavigationIcon">{icon}</div>
      <div className="NavigationName">{menu}</div>
    </CustomLink>
  );
}

export default NavigationMenu;
