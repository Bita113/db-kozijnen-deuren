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
          title: 'No Data Collection',
          content: 'This website does NOT collect, store, or process any personal data. We do not use contact forms, user accounts, registration systems, or any other mechanism that would require you to provide personal information.'
        },
        {
          title: 'Cookies',
          content: 'This website does not use cookies. No tracking cookies, analytics cookies, or advertising cookies are placed on your device when you visit our website.'
        },
        {
          title: 'Analytics',
          content: 'We do not use any analytics tools or tracking scripts on this website. Your browsing behavior is not monitored, recorded, or analyzed.'
        },
        {
          title: 'Third-Party Links',
          content: 'Our website contains links to third-party services (WhatsApp and Facebook). When you click these links, you leave our website and are subject to the privacy policies of those respective services. We encourage you to review their privacy policies.'
        },
        {
          title: 'GDPR Compliance',
          content: 'As we do not collect any personal data, the data processing requirements of the General Data Protection Regulation (GDPR) — including consent, data access requests, data portability, and the right to erasure — do not apply to this website. Should this change in the future, we will update this policy accordingly and implement all necessary GDPR compliance measures.'
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
          title: 'Geen Gegevensverzameling',
          content: 'Deze website verzamelt, bewaart of verwerkt GEEN persoonlijke gegevens. Wij gebruiken geen contactformulieren, gebruikersaccounts, registratiesystemen of andere mechanismen waarvoor u persoonlijke informatie zou moeten verstrekken.'
        },
        {
          title: 'Cookies',
          content: 'Deze website maakt geen gebruik van cookies. Er worden geen tracking cookies, analytics cookies of advertentiecookies op uw apparaat geplaatst wanneer u onze website bezoekt.'
        },
        {
          title: 'Analytics',
          content: 'Wij gebruiken geen analysetools of trackingscripts op deze website. Uw surfgedrag wordt niet gemonitord, vastgelegd of geanalyseerd.'
        },
        {
          title: 'Links naar Derden',
          content: 'Onze website bevat links naar diensten van derden (WhatsApp en Facebook). Wanneer u op deze links klikt, verlaat u onze website en valt u onder het privacybeleid van de betreffende diensten. Wij raden u aan hun privacybeleid te lezen.'
        },
        {
          title: 'AVG-Naleving',
          content: 'Aangezien wij geen persoonlijke gegevens verzamelen, zijn de verwerkingsvereisten van de Algemene Verordening Gegevensbescherming (AVG) — waaronder toestemming, toegangsverzoeken, gegevensoverdraagbaarheid en het recht op verwijdering — niet van toepassing op deze website. Mocht dit in de toekomst veranderen, dan zullen wij dit beleid dienovereenkomstig bijwerken.'
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
  const [language, setLanguage] = useState('en');
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