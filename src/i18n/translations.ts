interface Translations extends Record<string, any> {
  en: Record<string, string>;
  fr: Record<string, string>;
}

const translations: Translations = {
  en: {
    name: "Name",
    surname: "Surname",
    windowWidth: "Window Width",
    locale: "Locale",
    languageToggle: "Choose a language",
    themeToggle: "Dark Theme",
    flag: "🇬🇧",
  },
  fr: {
    name: "Nom",
    surname: "Nom de famille",
    windowWidth: "Largeur de la fenêtre",
    locale: "Lieu",
    languageToggle: "Choisissez une langue",
    themeToggle: "Thème sombre",
    flag: "🇫🇷",
  },
};

export default translations;
