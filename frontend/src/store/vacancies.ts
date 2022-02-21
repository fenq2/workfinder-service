import { runInAction, makeAutoObservable } from 'mobx';

import { getVacanciesData, ICardPrev } from '../services/api';

class Vacancies {
  vacancies: ICardPrev[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getVacancies() {
    this.loading = true;

    try {
      const projects = await getVacanciesData();

      runInAction(() => {
        this.vacancies = projects;
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.loading = false;
        console.log(e);
      });
    }
  }
}

export default new Vacancies();
