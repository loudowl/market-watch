import React from 'react';
import { NewsProvider } from './context/NewsContext';
import HomePage from './pages/HomePage';
import './styles/main.css';

function App() {
  return (
    <NewsProvider>
      <HomePage />
    </NewsProvider>
  );
}

export default App;
