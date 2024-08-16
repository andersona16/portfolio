import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.welcome')}</h1>
      <p>{t('home.description')}</p>
    </div>
  );
};

export default Home;
