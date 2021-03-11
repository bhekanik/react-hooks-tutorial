import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useMemo,
  useState,
  useContext,
} from "react";
import translations from "../i18n/translations";

interface LocaleContextType {
  locale: string;
  setLocale: Dispatch<SetStateAction<string>>;
  getLocalizedValue: (key: string) => string;
}

export const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => null,
  getLocalizedValue: () => "",
});

export const LocaleProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState<string>("en");

  const value = useMemo(
    (): LocaleContextType => ({
      locale,
      setLocale,
      getLocalizedValue: (key: string): string => {
        return translations[locale][key];
      },
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  const { locale, setLocale, getLocalizedValue } = context;

  return { locale, setLocale, getLocalizedValue };
};
