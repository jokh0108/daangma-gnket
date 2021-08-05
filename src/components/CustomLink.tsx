import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

function CustomLink({ className, ...restProps }: LinkProps) {
  return <Link {...restProps} className={`CustomLink ${className}`} />;
}

export default CustomLink;
