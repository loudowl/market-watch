import { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const useFetchNews = () => {
  return useContext(NewsContext);
};

export default useFetchNews;
