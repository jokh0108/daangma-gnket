import React, { ReactNode } from 'react';

export interface NavigationMenuProps {
  icon: ReactNode;
  menu: string;
}

function NavigationMenu({ icon, menu }: NavigationMenuProps) {
  return (
    <div className="NavigationMenu">
      {/* TODO: 현재 경로에 따라 filled 아이콘 적용  */}
      <div className="NavigationIcon">{icon}</div>
      <div className="NavigationName">{menu}</div>
    </div>
  );
}

export default NavigationMenu;
