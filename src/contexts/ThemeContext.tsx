import {
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
  createContext,
  FC,
  useContext,
} from "react";

interface ThemeContextType {
  theme: string;
  setTheme?: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: "light" });

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const value = useMemo(
    (): ThemeContextType => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  const { theme, setTheme } = context;

  return { theme, setTheme };
};
