import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export default function SEOHead() {
  const { language } = useLanguage();

  useEffect(() => {
    // Meta tags based on language
    const seoData = {
      en: {
        title: 'DB Kozijnen & Deuren - Professional Window & Door Installation Rotterdam',
        description: 'Expert installation, replacement and service for windows and doors in Rotterdam. Professional craftsmanship, trusted manufacturers, transparent pricing. Serving Rotterdam and surroundings.',
        keywords: 'windows Rotterdam, doors Rotterdam, window installation, door installation, kozijnen Rotterdam, deuren Rotterdam, window replacement, door replacement, Schiedam, Vlaardingen',
      },
      nl: {
        title: 'DB Kozijnen & Deuren - Professionele Kozijn & Deur Installatie Rotterdam',
        description: 'Deskundige plaatsing, vervanging en service van kozijnen en deuren in Rotterdam. Vakmanschap, betrouwbare fabrikanten, transparante prijzen. Actief in Rotterdam en omgeving.',
        keywords: 'kozijnen Rotterdam, deuren Rotterdam, kozijnen plaatsen, deuren installeren, ramen Rotterdam, kozijnen vervangen, deuren vervangen, Schiedam, Vlaardingen',
      },
    };

    const data = seoData[language];

    // Update title
    document.title = data.title;

    // Update or create meta tags
    const updateMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO
    updateMeta('description', data.description);
    updateMeta('keywords', data.keywords);
    updateMeta('author', 'DB Kozijnen & Deuren');
    updateMeta('robots', 'index, follow');
    updateMeta('language', language === 'nl' ? 'Dutch' : 'English');

    // Geo tags
    updateMeta('geo.region', 'NL-ZH');
    updateMeta('geo.placename', 'Rotterdam');
    updateMeta('geo.position', '51.9225;4.47917');
    updateMeta('ICBM', '51.9225, 4.47917');

    // Open Graph
    updateMeta('og:type', 'business.business', true);
    updateMeta('og:title', data.title, true);
    updateMeta('og:description', data.description, true);
    updateMeta('og:url', window.location.href, true);
    updateMeta('og:locale', language === 'nl' ? 'nl_NL' : 'en_US', true);
    updateMeta('og:site_name', 'DB Kozijnen & Deuren', true);
    updateMeta('og:image', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/16837212d_8051c5d1-eebb-4e8a-b2c0-71bf135047111.jpg', true);

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', data.title);
    updateMeta('twitter:description', data.description);
    updateMeta('twitter:image', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/16837212d_8051c5d1-eebb-4e8a-b2c0-71bf135047111.jpg');

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + window.location.pathname);

    // Language alternates
    let alternateLang = document.querySelector('link[rel="alternate"][hreflang]');
    if (!alternateLang) {
      const altNL = document.createElement('link');
      altNL.setAttribute('rel', 'alternate');
      altNL.setAttribute('hreflang', 'nl');
      altNL.setAttribute('href', window.location.origin);
      document.head.appendChild(altNL);

      const altEN = document.createElement('link');
      altEN.setAttribute('rel', 'alternate');
      altEN.setAttribute('hreflang', 'en');
      altEN.setAttribute('href', window.location.origin);
      document.head.appendChild(altEN);

      const altXDefault = document.createElement('link');
      altXDefault.setAttribute('rel', 'alternate');
      altXDefault.setAttribute('hreflang', 'x-default');
      altXDefault.setAttribute('href', window.location.origin);
      document.head.appendChild(altXDefault);
    }

    // Structured Data (Schema.org - LocalBusiness)
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://dbkozijnendeuren.nl",
      "name": "DB Kozijnen & Deuren",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/16837212d_8051c5d1-eebb-4e8a-b2c0-71bf135047111.jpg",
      "description": data.description,
      "url": window.location.origin,
      "telephone": "+40785570289",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rotterdam",
        "addressRegion": "Zuid-Holland",
        "addressCountry": "NL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.9225,
        "longitude": 4.47917
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Rotterdam"
        },
        {
          "@type": "City",
          "name": "Schiedam"
        },
        {
          "@type": "City",
          "name": "Vlaardingen"
        },
        {
          "@type": "City",
          "name": "Capelle aan den IJssel"
        },
        {
          "@type": "City",
          "name": "Ridderkerk"
        },
        {
          "@type": "City",
          "name": "Barendrecht"
        },
        {
          "@type": "City",
          "name": "Spijkenisse"
        },
        {
          "@type": "City",
          "name": "Dordrecht"
        }
      ],
      "serviceType": [
        "Window Installation",
        "Door Installation",
        "Window Replacement",
        "Door Replacement",
        "Kozijnen Plaatsen",
        "Deuren Installeren"
      ],
      "sameAs": [
        "https://www.facebook.com/darius.budeic"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    };

    structuredData.textContent = JSON.stringify(schema);
  }, [language]);

  return null;
}