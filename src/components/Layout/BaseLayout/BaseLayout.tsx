import React from 'react';

import { MainSidebar } from '../../MainSidebar/MainSidebar';

import styles from './BaseLayout.module.scss';

const BaseLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.content}>
      <MainSidebar />
      {children}
    </div>
  );
};

export { BaseLayout };
