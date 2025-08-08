export const mapLocaleToShortCode = (fullLocale: string): string => {
  const shortCode = fullLocale.split("-")[0];

  const supportedLocales = ["en", "fr", "es", "de"];
  if (supportedLocales.includes(shortCode)) {
    return shortCode;
  }

  return "en";
};
