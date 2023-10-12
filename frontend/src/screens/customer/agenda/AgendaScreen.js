import React, { useEffect, useRef, useState } from 'react';
import HeroSection from './sections/HeroSection';
import InfoSection from './sections/InfoSection';
import PhraseSection from './sections/PhraseSection';
import ContentSection from './sections/ContentSection';
import DoctorsSaySection from './sections/DoctorsSaySection';
import ViveteSection from './sections/ViveteSection';
import AuthorsSection from './sections/AuthorsSection';
import NuriaSection from './sections/NuriaSection';
import PopUpCampaign from '../../../components/PopUpCampaign';
import { Helmet } from 'react-helmet';

const AgendaScreen = () => {
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
    <main className="page">
      <Helmet>
        <title>Agenda 2024 | Mujer Sin Reglas</title>
      </Helmet>
      <HeroSection />
      <InfoSection />
      <ContentSection />
      <DoctorsSaySection />
      {/* <ViveteSection /> */}
      <NuriaSection />
      <div ref={triggerRef} />
      {isPopupOpen && (
        <PopUpCampaign isOpen={isPopupOpen} closeModal={closePopup} />
      )}
    </main>
  );
};

export default AgendaScreen;
