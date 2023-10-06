import React from 'react'
import { useState } from 'react';
import { createContext } from "react";

const TranslationContext = createContext();

function Provider({ children }) {
  const [language, setLanguage] = useState('sr');
  const [translate, setTranslate] = useState({
    menu: {
      home: 'Početna',
      gallery: 'Galerija',
      contact: 'Kontakt',
      team: 'Tim',
    },

    location: {
      city: 'Beograd'
    },

    contact: {
      phone: 'Telefon'
    },

    team: {
      surgeon: 'Oralni Hirurg',
      speicalist: 'Specijalista bolesti zuba i endodoncije',
      doctor: 'Doktor stomatologije',
      asistant: 'Stomatološki asistent',
    }
  });

  const valueToShare = {
    translate,
    setWebsiteLanguage: (updateLanguage) => {
      setLanguage(updateLanguage);

      if (updateLanguage === 'sr') {
        const languageUpdate = {
          ...translate, menu: {
            home: 'Početna',
            gallery: 'Galerija',
            contact: 'Kontakt',
            team: 'Tim',
          },

          location: {
            city: 'Beograd'
          },

          contact: {
            phone: 'Telefon'
          },

          team: {
            surgeon: 'Oralni Hirurg',
            speicalist: 'Specijalista bolesti zuba i endodoncije',
            doctor: 'Doktor stomatologije',
            asistant: 'Stomatološki asistent',
          }
        }

        setTranslate(languageUpdate);

        return;
      }

      if (updateLanguage === 'en') {
        const languageUpdate = {
          ...translate, menu: {
            home: 'Home',
            gallery: 'Gallery',
            contact: 'Contact',
            team: 'Team',
          },

          location: {
            city: 'Belgrade'
          },

          contact: {
            phone: 'Phone'
          },

          team: {
            surgeon: 'Oral Surgeon',
            speicalist: 'Specialist in dental diseases and endodontics',
            doctor: 'Dentist',
            asistant: 'Dental Assistant',
          }
        }

        setTranslate(languageUpdate);

        return;
      }
    }
  }

  return <TranslationContext.Provider value={valueToShare}>
    {children}
  </TranslationContext.Provider>
}

export { Provider }
export default TranslationContext