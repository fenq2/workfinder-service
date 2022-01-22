import React from 'react';

import { MainNavItem } from './MainNavItem';

import styles from './MainNav.module.scss';

const MainNav: React.FC = () => {
  const navList = [
    { id: 0, text: 'Главная' },
    { id: 1, text: 'Поиск вакансий' },
    { id: 2, text: 'Избранные вакансии' },
  ];
  const navItems = navList.map(({ id, text }) => (
    <MainNavItem key={id} title={text} />
  ));
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>{navItems}</ul>
    </nav>
  );
};

export { MainNav };
