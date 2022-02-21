import React, { useState } from 'react';

import { BaseLayout } from '../../components/Layout/BaseLayout';
import { VacanciesList } from '../../components/VacanciesList';
import { VacancySidebar } from '../../components/VacancySidebar';
import { getVacancyDataId, ICardPrev } from '../../services/api';

import styles from './Homepage.module.scss';

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showVacancySidebar, setShowVacancySidebar] = useState(false);
  const [currentVacancyItem, setCurrentVacancyItem] =
    useState<null | ICardPrev>(null);

  const handleOpenVacancy = async (
    id: string | null | undefined
  ): Promise<any> => {
    try {
      setLoading(true);
      setShowVacancySidebar(true);
      const project = await getVacancyDataId(id);
      setCurrentVacancyItem(project);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const handleCloseVacancy = () => {
    setShowVacancySidebar(false);
    setCurrentVacancyItem(null);
  };

  return (
    <BaseLayout>
      <div className={styles.homepage}>
        <div className={styles.header}>
          <span className={styles.title}>WORKFINDER</span>
          <span className={styles.description}>10 вакансий размещено</span>
        </div>
        <VacanciesList handleOpenVacancy={handleOpenVacancy} />
      </div>
      <VacancySidebar
        currentVacancyItem={currentVacancyItem}
        loading={loading}
        isShow={showVacancySidebar}
        handleCloseVacancy={handleCloseVacancy}
      />
    </BaseLayout>
  );
};

export { HomePage };
