import i18next from 'i18next';
import moment from 'moment';
import LngDetector from 'i18next-browser-languagedetector';

import resources from './locales/index';

i18next.use(LngDetector).init(
  {
    detection: {
      order: ['querystring', 'navigator'],
    },
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',
    ns: ['common'],
    defaultNS: 'common',
  },
  (err, t) => {
    // Ensure moment is configured for the correct locale
    moment.locale(i18next.language);
  },
);

export default i18next;
