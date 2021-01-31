import * as React from 'react';

import { IButton } from './types';

const Button: React.FC<IButton> = ({ children, onClick, ...props }) => (
  <button {...props} onClick={onClick}>
    {children}
  </button>
);

export default Button;
