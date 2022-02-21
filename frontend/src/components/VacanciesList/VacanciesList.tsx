import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import store from '../../store/vacancies';
import { VacancyItem } from './components/VacancyItem';

import styles from './VacanciesList.module.scss';

interface IVacanciesListProps {
  handleOpenVacancy: (id: string | null | undefined) => void;
}

const VacanciesList: React.FC<IVacanciesListProps> = observer(
  ({ handleOpenVacancy }) => {
    useEffect(() => {
      store.getVacancies();
    }, []);

    return (
      <div className={styles.list}>
        {store.loading ? (
          <>
            <Skeleton duration={2} height={100} />
            <Skeleton duration={2} height={100} />
            <Skeleton duration={2} height={100} />
            <Skeleton duration={2} height={100} />
          </>
        ) : (
          store.vacancies.map(
            ({
              _id,
              position,
              company,
              location,
              description,
              salary,
              logo,
            }) => (
              <VacancyItem
                key={_id}
                logo={logo}
                id={_id}
                position={position}
                company={company}
                location={location}
                description={description}
                salary={salary}
                handleOpenVacancy={handleOpenVacancy}
              />
            )
          )
        )}
      </div>
    );
  }
);

export { VacanciesList };
