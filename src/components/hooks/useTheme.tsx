import LocalizedText from "../LocalizedText";
import styles from "../../styles/renderProps.module.css";
import { ComponentType, ChangeEvent, FC } from "react";
import { useTheme as useThemeContext } from "../../contexts";

const useTheme = (): [ComponentType, string] => {
  const { theme, setTheme } = useThemeContext();

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setTheme) setTheme(e.target.checked ? "dark" : "light");
  };

  const ThemeToggle: FC = () => {
    return (
      <>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleThemeChange}
          />
          <LocalizedText translationKey="themeToggle" />
        </label>
      </>
    );
  };

  return [ThemeToggle, theme];
};

export default useTheme;
