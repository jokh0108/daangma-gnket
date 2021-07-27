import React, { ReactNode } from 'react';
import generateUid from '../utils/generateUid';

interface Props {
  buttons: ReactNode[];
}

function HeaderButtons({ buttons }: Props) {
  return (
    <div className="HeaderButtons">
      {buttons.map(button => (
        <div key={generateUid()} className="HeaderButton">
          {button}
        </div>
      ))}
    </div>
  );
}

export default HeaderButtons;
