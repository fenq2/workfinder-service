import cx from 'classnames';
import React from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  variant: string;
  fullWidth?: boolean;
}

const Button: React.FC<IButtonProps> = ({ text, type, variant, fullWidth }) => {
  return (
    <button
      type={type}
      className={cx(styles.button, {
        [styles[variant]]: styles.variant,
        [styles.fullWidth]: fullWidth,
      })}
    >
      {text}
    </button>
  );
};

export { Button };
