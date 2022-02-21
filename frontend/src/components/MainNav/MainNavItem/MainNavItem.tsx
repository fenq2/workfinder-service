import React from 'react';

import { Icon } from '../../Base/Icon';

import styles from './MainNavItem.module.scss';

interface IMainNavItemProps {
  title: string;
  icon: string;
}

const MainNavItem: React.FC<IMainNavItemProps> = ({ title, icon }) => {
  return (
    <a href="/" className={styles.item}>
      <Icon icon={icon} size="18" variant="nav" />
      {title}
    </a>
  );
};

export { MainNavItem };
