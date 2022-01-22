import React from 'react';

import { MainSidebar } from '../../MainSidebar';

import styles from './BaseLayout.module.scss';

const BaseLayout: React.FC = ({ children }) => {
  return (
    <>
      <MainSidebar />
      <div className={styles.content}>{children}</div>
    </>
  );
};

export { BaseLayout };
