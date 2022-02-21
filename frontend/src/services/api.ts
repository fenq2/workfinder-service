import axios from 'axios';

export interface ICardPrev {
  _id?: string | null;
  logo?: string | null;
  position: string | null;
  company: string | null;
  location: string | null;
  description: string | null;
  salary: string | null;
  tags?: string[] | null;
}

export const getVacanciesData = async (): Promise<ICardPrev[]> => {
  return (await axios.get('/api/vacancies')).data;
};

export const getVacancyDataId = async (
  id: string | null | undefined
): Promise<ICardPrev> => {
  return (await axios.get(`/api/vacancies/${id}`)).data;
};
