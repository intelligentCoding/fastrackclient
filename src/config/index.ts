
export const Config = {
  defaultLanguage: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE ?? 'en',
  availableLanguages: process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES
    ? process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES.split(',')
    : [],
  enableMultiLang: process.env.NEXT_PUBLIC_ENABLE_MULTI_LANG === 'true',
  rtlLanguages: ['ar', 'fa', 'he'],
  getDirection: (language: string | undefined) => {
    if (!language) return 'ltr';
    return Config.rtlLanguages.includes(language) ? 'rtl' : 'ltr';
  },
};
