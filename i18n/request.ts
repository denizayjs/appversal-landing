import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales, type Locale } from "../i18n";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? defaultLocale;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    defaultLocale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

