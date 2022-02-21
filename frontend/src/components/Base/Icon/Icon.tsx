import cx from 'classnames';
import IcomoonReact from 'icomoon-react';
import React from 'react';

import iconSet from '../../../assets/icomoon/selection.json';

import styles from './Icon.module.scss';

interface IIconProps {
  color?: string;
  size: string | number;
  icon: string;
  variant: string;
}

const Icon: React.FC<IIconProps> = ({
  color,
  size,
  icon,
  variant = 'standart',
}) => {
  return (
    <IcomoonReact
      className={cx(styles.icon, { [styles[variant]]: variant })}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

export { Icon };
