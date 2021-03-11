import LocalizedText from "../LocalizedText";
import styles from "../../styles/hoc.module.css";
import { useLocale as useLocaleContext } from "../../contexts";
import { ComponentType, ChangeEvent } from "react";

const useLocale = (): [ComponentType, (key: string) => string] => {
  const { locale, setLocale, getLocalizedValue } = useLocaleContext();

  const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (setLocale) setLocale(e.target.value);
  };

  const LocaleToggle = () => {
    return (
      <>
        <label className={styles.select}>
          <LocalizedText translationKey="languageToggle" />
          <select value={locale} onChange={handleLocaleChange}>
            <option value="en">United Kingdom</option>
            <option value="fr">France</option>
          </select>
        </label>
      </>
    );
  };

  return [LocaleToggle, getLocalizedValue];
};

export default useLocale;
