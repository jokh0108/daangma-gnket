import React, { ReactNode } from 'react';

interface Props {
  leftChildren: ReactNode;
  rightChildren?: ReactNode;
}

function Header({ leftChildren, rightChildren = null }: Props) {
  return (
    <div className="Header">
      <div>{leftChildren}</div>
      <div>{rightChildren}</div>
    </div>
  );
}

Header.defaultProps = {
  rightChildren: null,
};

export default Header;
