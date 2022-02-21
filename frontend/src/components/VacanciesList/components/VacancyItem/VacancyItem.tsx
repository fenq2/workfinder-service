import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import { ICardPrev } from '../../../../services/api';

import styles from './VacancyItem.module.scss';

interface IVacanciesItemProps extends ICardPrev {
  id: string | null | undefined;
  handleOpenVacancy: (id: string | null | undefined) => void;
}

const VacancyItem: React.FC<IVacanciesItemProps> = ({
  id,
  position,
  logo,
  company,
  location,
  salary,
  handleOpenVacancy,
}) => {
  const [letterCompany, setLetterCompany] = useState<string>('');

  useEffect(() => {
    company && setLetterCompany(company[0]);
  }, []);

  const randomCharColor = () => {
    return (
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
    );
  };

  return (
    <button
      onClick={() => handleOpenVacancy(id)}
      type="button"
      className={styles.item}
    >
      <div className={styles.left}>
        <div className={styles.logo}>
          {logo ? (
            <img src={logo} alt="logo" />
          ) : (
            <span
              style={{ color: randomCharColor() }}
              className={styles.logoChar}
            >
              {letterCompany}
            </span>
          )}
        </div>
        <div className={styles.info}>
          <span className={cx(styles.text, styles.textPosition)}>
            {position}
          </span>
          <span className={styles.description}>{company}</span>
        </div>
      </div>

      <div className={styles.side}>
        <span className={styles.text}>{location}</span>
      </div>

      <div className={cx(styles.side, styles.sideSmall)}>
        <span className={styles.text}>{salary}</span>
      </div>
    </button>
  );
};

export { VacancyItem };
