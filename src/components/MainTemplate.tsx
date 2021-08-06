import React, { ReactNode } from 'react';

interface Props {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
}

function MainTemplate({ header, main, footer }: Props) {
  return (
    <div className="MainTemplate">
      {header}
      {main}
      {footer}
    </div>
  );
}

export default MainTemplate;
