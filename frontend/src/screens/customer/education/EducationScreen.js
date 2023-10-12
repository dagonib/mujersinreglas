import React from 'react';
import TypeSection from './sections/TypeSection';
import HeroSection from './sections/HeroSection';
import ComentariesSection from './sections/ComentariesSection';
import { Helmet } from 'react-helmet';

const EducationScreen = () => {
  return (
    <main className="page">
      <Helmet>
        <title>Educación | Mujer Sin Reglas</title>
      </Helmet>
      <HeroSection />
      <TypeSection />
      <ComentariesSection />
    </main>
  );
};

export default EducationScreen;
