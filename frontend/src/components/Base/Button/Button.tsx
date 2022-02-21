import cx from 'classnames';
import React from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  variant: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  text,
  type,
  variant,
  fullWidth,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cx(styles.button, {
        [styles[variant]]: variant,
        [styles.fullWidth]: fullWidth,
      })}
    >
      {text}
    </button>
  );
};

export { Button };
