import React from 'react';

import styles from './BaseLayout.module.scss';

const BaseLayout: React.FC = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export { BaseLayout };
