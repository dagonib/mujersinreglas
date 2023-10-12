import React, { useEffect, useRef, useState } from 'react';
import HeroSection from './sections/HeroSection';
import SubscriptionSection from './sections/SubscriptionSection';
import EventsSection from './sections/EventsSection';
import EngageFirstSection from './sections/EngageFirstSection';
import EducationSection from './sections/EducationSection';
import AgendaSection from './sections/AgendaSection';
import AboutmeSection from './sections/AboutmeSection';
import EngageSecondSection from './sections/EngageSecondSection';
import PopUpCampaign from '../../../components/PopUpCampaign';
import { Helmet } from 'react-helmet';

const HomeScreen = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasPopupOpened, setHasPopupOpened] = useState(false);

  const triggerRef = useRef(null);

  const openPopup = () => {
    setIsPopupOpen(true);
    setHasPopupOpened(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const triggerPosition = triggerRef.current.getBoundingClientRect().top;
      if (triggerPosition < 4500 && !hasPopupOpened) {
        openPopup();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasPopupOpened]);

  return (
    <main className="home page">
      <Helmet>
        <title>Mujer Sin Reglas | Carolina Ackermann</title>
        <meta
          name="description"
          content="Bienestar consciente en la menopausia y el climaterio."
        />
        <meta
          name="keywords"
          content="agenda, registro, mujer, sin, reglas, menopausia, climaterio"
        />
        <meta name="author" content="Carolina Ackermann" />
      </Helmet>
      <HeroSection />
      <SubscriptionSection />
      <EventsSection />
      <EngageFirstSection />
      <EducationSection />
      <AgendaSection />
      <AboutmeSection />
      <EngageSecondSection />
      <div ref={triggerRef} />
      {isPopupOpen && (
        <PopUpCampaign isOpen={isPopupOpen} closeModal={closePopup} />
      )}
      {/* <MediaSection /> */}
    </main>
  );
};

export default HomeScreen;
