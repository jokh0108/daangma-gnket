import React, { ReactNode } from 'react';

interface Props {
  leftChild: ReactNode;
  rightChild?: ReactNode;
}

function Header({ leftChild, rightChild = null }: Props) {
  return (
    <div className="Header">
      <div>{leftChild}</div>
      <div>{rightChild}</div>
    </div>
  );
}

Header.defaultProps = {
  rightChild: null,
};

export default Header;
