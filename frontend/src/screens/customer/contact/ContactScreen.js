import React from 'react';
import HeroSection from './sections/HeroSection';
import OptionsSection from './sections/OptionsSection';
import SubscribeSection from './sections/SubscribeSection';
import ContactFormSection from './sections/ContactFormSection';
import { Helmet } from 'react-helmet';

const ContactScreen = () => {
  return (
    <main className="page">
      <Helmet>
        <title>Contacta | Mujer Sin Reglas</title>
      </Helmet>
      <HeroSection />
      <OptionsSection />
      <SubscribeSection />
      <ContactFormSection />
      {/* <PhraseSection /> */}
    </main>
  );
};

export default ContactScreen;
