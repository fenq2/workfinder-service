import React, { useState } from 'react';

import { MainSidebar } from '../../MainSidebar';
import { Preloader } from '../../Preloader';

import styles from './BaseLayout.module.scss';

const BaseLayout: React.FC = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);

  window.onload = function () {
    setShowLoader(false);
  };

  return (
    <>
      <Preloader showLoader={showLoader} />
      <MainSidebar />
      <div className={styles.content}>{children}</div>
    </>
  );
};

export { BaseLayout };
