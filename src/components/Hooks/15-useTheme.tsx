import Card from "../Card";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useFormInput from "../hooks/useFormInput";
import useTheme from "../hooks/useTheme";
import useWindowWidth from "../hooks/useWindowWidth";
import Row from "../Row";

const Greeting: React.FC = () => {
  const [NameInput, name] = useFormInput("Thor", "Name");
  const [SurnameInput, surname] = useFormInput("Odinson", "Surname");
  const width = useWindowWidth();
  useDocumentTitle(name + " " + surname);
  const [ThemeToggle, theme] = useTheme();

  return (
    <>
      <ThemeToggle />
      <Card theme={theme}>
        <NameInput />
        <SurnameInput />
        <Row label="Window Width">{width}</Row>
      </Card>
    </>
  );
};

export default Greeting;
