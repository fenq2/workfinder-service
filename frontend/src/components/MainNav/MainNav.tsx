import React from 'react';

import { MainNavItem } from './MainNavItem';

import styles from './MainNav.module.scss';

const MainNav: React.FC = () => {
  const navList = [
    { id: 0, text: 'Главная', icon: 'home-outline' },
    { id: 1, text: 'Поиск вакансий', icon: 'zoom' },
    { id: 2, text: 'Избранные вакансии', icon: 'heart-outline' },
  ];
  const navItems = navList.map(({ id, text, icon }) => (
    <MainNavItem key={id} title={text} icon={icon} />
  ));
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>{navItems}</ul>
    </nav>
  );
};

export { MainNav };
