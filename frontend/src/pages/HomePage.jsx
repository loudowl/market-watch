import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsList from '../components/NewsList';
import Loader from '../components/Loader';
import useFetchNews from '../hooks/useFetchNews';

const HomePage = () => {
  const { news, loading } = useFetchNews();

  return (
    <div>
      <Header />
      {loading ? <Loader /> : <NewsList news={news} />}
      <Footer />
    </div>
  );
};

export default HomePage;
