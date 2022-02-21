import cx from 'classnames';
import React, { useState, useEffect } from 'react';

import { Logo } from '../Logo';

import styles from './Preloader.module.scss';

interface IPreloaderProps {
  showLoader: boolean;
}

const Preloader: React.FC<IPreloaderProps> = ({ showLoader }) => {
  return (
    <div className={cx(styles.preloader, { [styles.show]: showLoader })}>
      <Logo />
    </div>
  );
};

export { Preloader };
