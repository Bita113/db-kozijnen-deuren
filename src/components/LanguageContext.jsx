import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      services: 'Services',
      whyUs: 'Why Us',
      area: 'Service Area',
      contact: 'Contact',
      privacy: 'Privacy Policy',
    },
    hero: {
      title: 'Premium Window & Door',
      titleAccent: 'Installation in Rotterdam',
      subtitle: 'Professional installation, replacement, and full-service solutions for windows and doors. Quality craftsmanship you can trust.',
      ctaWhatsapp: 'Contact via WhatsApp',
      ctaFacebook: 'Visit Our Facebook',
    },
    services: {
      sectionLabel: 'What We Do',
      title: 'Our Services',
      subtitle: 'From precise measurements to professional installation — we handle every step of your window and door project.',
      items: [
        { title: 'Installation', description: 'Expert installation of windows and doors with precision and care, ensuring a perfect fit every time.' },
        { title: 'Removal & Replacement', description: 'Safe removal of old windows and doors, with seamless replacement using modern, energy-efficient products.' },
        { title: 'Professional Measurements', description: 'Accurate on-site measurements to ensure your new windows and doors are manufactured to exact specifications.' },
        { title: 'Production Coordination', description: 'We work with trusted manufacturing partners to produce custom windows and doors based on your measurements.' },
        { title: 'Transport', description: 'Careful transport of your windows and doors from the manufacturer directly to your location.' },
        { title: 'Complete Solutions', description: 'End-to-end project management — from initial consultation to final installation and finishing touches.' },
      ],
    },
    whyUs: {
      sectionLabel: 'Why DB Kozijnen & Deuren',
      title: 'Built on Trust & Craftsmanship',
      subtitle: 'We take pride in delivering exceptional quality and building lasting relationships with every client.',
      items: [
        { title: 'Experienced Team', description: 'Years of hands-on experience in window and door installation across Rotterdam.' },
        { title: 'Local Presence', description: 'Based in Rotterdam, we understand the local building standards and climate requirements.' },
        { title: 'Reliable Partners', description: 'We collaborate with trusted manufacturers to guarantee the highest product quality.' },
        { title: 'Professional Work', description: 'Clean, efficient, and respectful — we treat your home as if it were our own.' },
        { title: 'Transparent Communication', description: 'No surprises. Clear timelines, honest pricing, and open communication throughout your project.' },
      ],
    },
    area: {
      sectionLabel: 'Where We Work',
      title: 'Serving Rotterdam & Surroundings',
      subtitle: 'Our primary service area covers Rotterdam and the surrounding municipalities. Contact us to check availability in your area.',
      badge: 'Rotterdam Region',
      locations: ['Rotterdam', 'Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse', 'Dordrecht'],
      cta: 'Not sure if we cover your area? Get in touch!',
    },
    contact: {
      sectionLabel: 'Get In Touch',
      title: 'Ready to Start Your Project?',
      subtitle: 'Contact us directly via WhatsApp or Facebook. We respond quickly and are happy to provide a free consultation.',
      whatsappTitle: 'WhatsApp',
      whatsappDesc: 'Send us a message for a quick response',
      whatsappButton: 'Open WhatsApp',
      facebookTitle: 'Facebook',
      facebookDesc: 'Follow us and send a message',
      facebookButton: 'Visit Facebook Page',
      note: 'We typically respond within a few hours during business days.',
      noData: 'We do not collect any personal data through this website.',
    },
    footer: {
      tagline: 'Professional window & door installation in Rotterdam and surrounding areas.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      legal: 'Legal',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      noDataNotice: 'This website does not collect, store, or process any personal data.',
      companyInfo: 'Company Information',
      kvkNumber: 'KvK number',
      btwNumber: 'BTW number',
      address: 'Address',
      toBeDetermined: 'To be determined',
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: February 2026',
      sections: [
        {
          title: 'Introduction',
          content: 'DB Kozijnen & Deuren ("we", "us", "our") is committed to protecting your privacy. This privacy policy explains how we handle information in connection with our website.'
        },
        {
          title: 'No Data Collection on Website',
          content: 'This website does NOT collect, store, or process any personal data. We do not use contact forms, user accounts, registration systems, cookies, analytics, or any tracking technologies on our website.'
        },
        {
          title: 'Contact via WhatsApp or Facebook',
          content: 'When you contact us through WhatsApp or Facebook, any information you provide (name, phone number, message content) is used exclusively for processing your request for a quotation or service inquiry. This contact information is handled directly through those third-party platforms and is subject to their respective privacy policies. We do not store this data on our website servers.'
        },
        {
          title: 'Data Processing Purpose',
          content: 'Any personal information shared during contact is processed solely for: responding to your inquiry, preparing quotations, scheduling appointments, and providing our window and door installation services. We will never use your contact details for marketing purposes without your explicit consent.'
        },
        {
          title: 'Your Rights (GDPR)',
          content: 'You have the right to access, rectify, or delete any personal information we may hold. Since we do not store data on this website, please contact us directly via WhatsApp or Facebook to exercise these rights regarding any communications we have had.'
        },
        {
          title: 'GDPR Compliance',
          content: 'We are committed to full compliance with the General Data Protection Regulation (GDPR). Any personal data shared via third-party communication channels is processed lawfully, transparently, and securely in accordance with GDPR principles.'
        },
        {
          title: 'Changes to This Policy',
          content: 'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.'
        },
        {
          title: 'Contact',
          content: 'If you have any questions about this privacy policy, you can reach us via WhatsApp at +40 785 570 289 or through our Facebook page.'
        },
      ],
    },
  },
  nl: {
    nav: {
      services: 'Diensten',
      whyUs: 'Waarom Wij',
      area: 'Werkgebied',
      contact: 'Contact',
      privacy: 'Privacybeleid',
    },
    hero: {
      title: 'Hoogwaardige Kozijnen &',
      titleAccent: 'Deuren in Rotterdam',
      subtitle: 'Professionele installatie, vervanging en volledige service voor kozijnen en deuren. Vakmanschap waar u op kunt vertrouwen.',
      ctaWhatsapp: 'Contact via WhatsApp',
      ctaFacebook: 'Bezoek Onze Facebook',
    },
    services: {
      sectionLabel: 'Wat Wij Doen',
      title: 'Onze Diensten',
      subtitle: 'Van nauwkeurige metingen tot professionele installatie — wij verzorgen elke stap van uw kozijn- en deurenproject.',
      items: [
        { title: 'Installatie', description: 'Deskundige plaatsing van kozijnen en deuren met precisie en zorg, voor een perfecte pasvorm.' },
        { title: 'Verwijdering & Vervanging', description: 'Veilige verwijdering van oude kozijnen en deuren, met naadloze vervanging door moderne, energiezuinige producten.' },
        { title: 'Professioneel Inmeten', description: 'Nauwkeurige metingen op locatie om te garanderen dat uw nieuwe kozijnen en deuren op maat worden gemaakt.' },
        { title: 'Productiecoördinatie', description: 'Wij werken samen met betrouwbare productiepartners om kozijnen en deuren op maat te laten produceren.' },
        { title: 'Transport', description: 'Zorgvuldig transport van uw kozijnen en deuren, rechtstreeks van de fabrikant naar uw locatie.' },
        { title: 'Totaaloplossingen', description: 'Compleet projectmanagement — van eerste adviesgesprek tot uiteindelijke installatie en afwerking.' },
      ],
    },
    whyUs: {
      sectionLabel: 'Waarom DB Kozijnen & Deuren',
      title: 'Gebouwd op Vertrouwen & Vakmanschap',
      subtitle: 'Wij zijn trots op het leveren van uitzonderlijke kwaliteit en het opbouwen van duurzame relaties met elke klant.',
      items: [
        { title: 'Ervaren Team', description: 'Jarenlange praktijkervaring in de installatie van kozijnen en deuren in heel Rotterdam.' },
        { title: 'Lokale Aanwezigheid', description: 'Gevestigd in Rotterdam — wij kennen de lokale bouwvoorschriften en klimaateisen.' },
        { title: 'Betrouwbare Partners', description: 'Wij werken samen met betrouwbare fabrikanten om de hoogste productkwaliteit te garanderen.' },
        { title: 'Professioneel Werk', description: 'Schoon, efficiënt en respectvol — wij behandelen uw woning alsof het onze eigen is.' },
        { title: 'Transparante Communicatie', description: 'Geen verrassingen. Duidelijke planning, eerlijke prijzen en open communicatie gedurende het hele project.' },
      ],
    },
    area: {
      sectionLabel: 'Ons Werkgebied',
      title: 'Actief in Rotterdam & Omgeving',
      subtitle: 'Ons primaire werkgebied omvat Rotterdam en de omliggende gemeenten. Neem contact met ons op om de beschikbaarheid in uw regio te controleren.',
      badge: 'Regio Rotterdam',
      locations: ['Rotterdam', 'Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Spijkenisse', 'Dordrecht'],
      cta: 'Niet zeker of wij in uw regio werken? Neem contact op!',
    },
    contact: {
      sectionLabel: 'Neem Contact Op',
      title: 'Klaar om Uw Project te Starten?',
      subtitle: 'Neem rechtstreeks contact met ons op via WhatsApp of Facebook. Wij reageren snel en geven graag een vrijblijvend advies.',
      whatsappTitle: 'WhatsApp',
      whatsappDesc: 'Stuur ons een bericht voor een snelle reactie',
      whatsappButton: 'Open WhatsApp',
      facebookTitle: 'Facebook',
      facebookDesc: 'Volg ons en stuur een bericht',
      facebookButton: 'Bezoek Facebook Pagina',
      note: 'Wij reageren doorgaans binnen enkele uren op werkdagen.',
      noData: 'Wij verzamelen geen persoonlijke gegevens via deze website.',
    },
    footer: {
      tagline: 'Professionele installatie van kozijnen en deuren in Rotterdam en omstreken.',
      quickLinks: 'Snelkoppelingen',
      contactUs: 'Contact',
      legal: 'Juridisch',
      rights: 'Alle rechten voorbehouden.',
      privacy: 'Privacybeleid',
      noDataNotice: 'Deze website verzamelt, bewaart of verwerkt geen persoonlijke gegevens.',
      companyInfo: 'Bedrijfsinformatie',
      kvkNumber: 'KvK-nummer',
      btwNumber: 'BTW-nummer',
      address: 'Adres',
      toBeDetermined: 'Nader te bepalen',
    },
    privacy: {
      title: 'Privacybeleid',
      lastUpdated: 'Laatst bijgewerkt: februari 2026',
      sections: [
        {
          title: 'Introductie',
          content: 'DB Kozijnen & Deuren ("wij", "ons", "onze") hecht waarde aan de bescherming van uw privacy. Dit privacybeleid legt uit hoe wij omgaan met informatie in verband met onze website.'
        },
        {
          title: 'Geen Gegevensverzameling op Website',
          content: 'Deze website verzamelt, bewaart of verwerkt GEEN persoonlijke gegevens. Wij gebruiken geen contactformulieren, gebruikersaccounts, registratiesystemen, cookies, analytics of trackingtech­nologieën op onze website.'
        },
        {
          title: 'Contact via WhatsApp of Facebook',
          content: 'Wanneer u contact met ons opneemt via WhatsApp of Facebook, wordt alle informatie die u verstrekt (naam, telefoonnummer, berichtinhoud) uitsluitend gebruikt voor het verwerken van uw aanvraag voor een offerte of dienstverlening. Deze contactinformatie wordt rechtstreeks via deze externe platforms verwerkt en valt onder hun respectieve privacybeleid. Wij slaan deze gegevens niet op onze websiteservers op.'
        },
        {
          title: 'Doel van Gegevensverwerking',
          content: 'Alle persoonlijke informatie die tijdens contact wordt gedeeld, wordt uitsluitend verwerkt voor: het beantwoorden van uw aanvraag, het opstellen van offertes, het plannen van afspraken, en het leveren van onze kozijn- en deurmontagediensten. Wij zullen uw contactgegevens nooit gebruiken voor marketingdoeleinden zonder uw uitdrukkelijke toestemming.'
        },
        {
          title: 'Uw Rechten (AVG)',
          content: 'U heeft het recht om toegang te krijgen tot, te corrigeren of te verwijderen van persoonlijke informatie die wij mogelijk bewaren. Aangezien wij geen gegevens op deze website opslaan, kunt u rechtstreeks contact met ons opnemen via WhatsApp of Facebook om deze rechten uit te oefenen met betrekking tot communicatie die wij hebben gehad.'
        },
        {
          title: 'AVG-Naleving',
          content: 'Wij zijn toegewijd aan volledige naleving van de Algemene Verordening Gegevensbescherming (AVG). Alle persoonlijke gegevens die via externe communicatiekanalen worden gedeeld, worden rechtmatig, transparant en veilig verwerkt in overeenstemming met de AVG-principes.'
        },
        {
          title: 'Wijzigingen in Dit Beleid',
          content: 'Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Eventuele wijzigingen worden op deze pagina gepubliceerd met een bijgewerkte revisiedatum.'
        },
        {
          title: 'Contact',
          content: 'Als u vragen heeft over dit privacybeleid, kunt u ons bereiken via WhatsApp op +40 785 570 289 of via onze Facebook-pagina.'
        },
      ],
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('nl');
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}