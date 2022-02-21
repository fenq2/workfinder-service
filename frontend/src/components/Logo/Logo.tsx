import React from 'react';

import logo from '../../assets/images/general/logo.svg';

import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export { Logo };
