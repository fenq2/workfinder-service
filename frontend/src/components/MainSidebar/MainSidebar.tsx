import React from 'react';

import { Button } from '../Base/Button';
import { Logo } from '../Logo';
import { MainNav } from '../MainNav';

import styles from './MainSidebar.module.scss';

const MainSidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <MainNav />
      <div className={styles.footer}>
        <Button text="Войти" type="button" variant="primary" fullWidth />
      </div>
    </div>
  );
};

export { MainSidebar };
