import { FC, useState, useContext, useEffect, ChangeEvent } from "react";
import { ThemeContext } from "../../contexts";
import Card from "../Card";
import Row from "../Row";

const Greeting: FC = () => {
  const [name, setName] = useState<string>("Clint");
  const [surname, setSurname] = useState<string>("Barton");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = name + " " + surname;
  }, [name, surname]);

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

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };

  return (
    <Card theme={theme}>
      <Row label="Name">
        <input value={name} onChange={handleNameChange} />
      </Row>
      <Row label="Surname">
        <input value={surname} onChange={handleSurnameChange} />
      </Row>
      <Row label="Window Width">{width}</Row>
    </Card>
  );
};

export default Greeting;
