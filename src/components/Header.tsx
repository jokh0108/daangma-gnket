import React, { ReactNode } from 'react';

interface Props {
  leftChildren: ReactNode;
  rightChildren: ReactNode;
}

function Header({ leftChildren, rightChildren }: Props) {
  return (
    <div className="Header">
      <div>{leftChildren}</div>
      <div>{rightChildren}</div>
    </div>
  );
}

export default Header;
