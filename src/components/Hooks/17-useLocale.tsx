import { FC } from "react";
import Card from "../Card";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useFormInput from "../hooks/useFormInput";
import useLocale from "../hooks/useLocale";
import useTheme from "../hooks/useTheme";
import useWindowWidth from "../hooks/useWindowWidth";
import LocalizedText from "../LocalizedText";
import Row from "../Row";

const Greeting: FC = () => {
  const width = useWindowWidth();
  const [ThemeToggle, theme] = useTheme();
  const [LocaleToggle, getLocalizedValue] = useLocale();
  const [NameInput, name] = useFormInput("Carol", getLocalizedValue("name"));
  const [SurnameInput, surname] = useFormInput(
    "Denvers",
    getLocalizedValue("surname")
  );
  useDocumentTitle(name + " " + surname);

  return (
    <>
      <ThemeToggle />
      <LocaleToggle />
      <Card theme={theme}>
        <NameInput />
        <SurnameInput />
        <Row label={getLocalizedValue("windowWidth")}>{width}</Row>
        <Row label={getLocalizedValue("locale")}>
          <LocalizedText translationKey="flag" />
        </Row>
      </Card>
    </>
  );
};

export default Greeting;
