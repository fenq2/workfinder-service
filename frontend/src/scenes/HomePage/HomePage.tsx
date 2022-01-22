import React from 'react';

import { BaseLayout } from '../../components/Layout/BaseLayout';

import styles from './Homepage.module.scss';

const HomePage: React.FC = () => {
  return (
    <BaseLayout>
      <div className={styles.homepage}>
        <div className={styles.header}>
          <span className={styles.title}>WORKFINDER</span>
          <span className={styles.description}>10 вакансий размещено</span>
        </div>
      </div>
    </BaseLayout>
  );
};

export { HomePage };
