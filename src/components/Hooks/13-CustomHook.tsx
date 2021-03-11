import {
  useState,
  useEffect,
  ComponentType,
  ChangeEvent,
  FC,
  useContext,
} from "react";
import { ThemeContext } from "../../contexts";
import Card from "../Card";
import Row from "../Row";

const useWindowWidth = (): number => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
};

const useDocumentTitle = (title: string): void => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const useFormInput = (
  initialValue: string,
  label: string
): [ComponentType, string] => {
  const [value, setValue] = useState<string>(initialValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const Input: FC = () => {
    return (
      <Row label={label}>
        <input value={value} onChange={handleChange} />
      </Row>
    );
  };
  return [Input, value];
};

const Greeting: FC = () => {
  const [NameInput, name] = useFormInput("Bucky", "Name");
  const [SurnameInput, surname] = useFormInput("Barnes", "Surname");
  const { theme } = useContext(ThemeContext);
  const width = useWindowWidth();
  useDocumentTitle(name + " " + surname);

  return (
    <Card theme={theme}>
      <NameInput />
      <SurnameInput />
      <Row label="Window Width">{width}</Row>
    </Card>
  );
};

export default Greeting;
