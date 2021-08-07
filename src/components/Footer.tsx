import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Footer({ children }: Props) {
  return <div className="Footer">{children}</div>;
}

export default Footer;
