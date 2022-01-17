import React from 'react';

import styles from './MainNavItem.module.scss';

interface IMainNavItemProps {
  title: string;
}

const MainNavItem: React.FC<IMainNavItemProps> = ({ title }) => {
  return (
    <a href="/" className={styles.item}>
      {title}
    </a>
  );
};

export { MainNavItem };
