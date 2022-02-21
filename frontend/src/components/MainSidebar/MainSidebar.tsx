import React from 'react';

import { Button } from '../Base/Button';
import { Logo } from '../Logo';
import { MainNav } from '../MainNav';

import styles from './MainSidebar.module.scss';

const MainSidebar: React.FC = () => {
  setTimeout(() => {
    console.log(123);
  }, 5000);

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <Logo />
      </div>
      <MainNav />
      <div className={styles.footer}>
        <Button text="Войти" type="button" variant="primary" fullWidth />
      </div>
    </div>
  );
};

export { MainSidebar };
