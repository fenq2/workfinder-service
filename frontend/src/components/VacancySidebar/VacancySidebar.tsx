import cx from 'classnames';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { ICardPrev } from '../../services/api';
import { Button } from '../Base/Button';

import styles from './VacancySidebar.module.scss';

interface IVacancySidebarProps {
  isShow: boolean;
  loading: boolean;
  currentVacancyItem: null | ICardPrev;
  handleCloseVacancy: () => void;
}

const VacancySidebar: React.FC<IVacancySidebarProps> = ({
  isShow,
  loading,
  currentVacancyItem,
  handleCloseVacancy,
}) => {
  return (
    <div className={cx(styles.sidebar, { [styles.sidebarActive]: isShow })}>
      <div className={styles.sidebarWrap}>
        <div className={styles.header}>
          <div className={styles.logo}>
            {loading ? (
              <Skeleton duration={2} width={110} height={110} />
            ) : (
              currentVacancyItem?.logo && (
                <img src={currentVacancyItem?.logo} alt="logo" />
              )
            )}
          </div>
          <span className={styles.title}>
            {loading ? (
              <Skeleton duration={2} width={315} height={35} />
            ) : (
              currentVacancyItem?.company
            )}
          </span>
        </div>
        <div className={styles.main}>
          <div className={styles.side}>
            <span className={styles.sideTitle}>
              {loading ? (
                <Skeleton duration={2} width={315} height={20} />
              ) : (
                currentVacancyItem?.position
              )}
            </span>
            <span className={styles.sideDesc}>
              {loading ? (
                <Skeleton duration={2} width={315} height={20} />
              ) : (
                currentVacancyItem?.location
              )}
            </span>
          </div>
          <div className={styles.side}>
            {loading ? (
              <Skeleton duration={2} width={315} height={200} />
            ) : (
              <>
                <span className={styles.sideTitle}>Описание</span>
                <span className={cx(styles.sideDesc, styles.sideDescNormal)}>
                  {currentVacancyItem?.description}
                </span>
              </>
            )}
          </div>
        </div>
        <div className={styles.footer}>
          {loading ? (
            <Skeleton duration={2} width={315} height={60} />
          ) : (
            <>
              <Button
                type="button"
                text="Откликнуться"
                variant="default"
                fullWidth
              />
              <Button
                type="button"
                onClick={handleCloseVacancy}
                text="Закрыть"
                variant="dark"
                fullWidth
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { VacancySidebar };
