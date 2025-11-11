export const locales = ['en', 'tr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

const i18nConfig = {
  defaultLocale,
  locales,
};

export default i18nConfig;
