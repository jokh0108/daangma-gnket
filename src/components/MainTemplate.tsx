import React, { ReactNode } from 'react';
import Navigation from './Navigation';

interface Props {
  children: ReactNode;
}

function MainTemplate({ children }: Props) {
  return (
    <div className="MainTemplate">
      {children}
      <Navigation />
    </div>
  );
}

export default MainTemplate;
