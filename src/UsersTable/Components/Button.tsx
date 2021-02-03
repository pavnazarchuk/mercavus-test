import * as React from 'react';

import classnames from 'classnames';

import styles from './Button.module.scss';
import { IButton } from './types';

const Button: React.FC<IButton> = ({
  children,
  onClick,
  mode = 'primary',
  ...props
}) => (
  <button
    className={classnames([styles.button, mode])}
    {...props}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
