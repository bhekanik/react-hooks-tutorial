import { FC, useState, useContext, useEffect, ChangeEvent } from "react";
import { ThemeContext } from "../../contexts";
import Card from "../Card";
import Row from "../Row";

const Greeting: FC = () => {
  const [name, setName] = useState<string>("Bruce");
  const [surname, setSurname] = useState<string>("Banner");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = name + " " + surname;
  }, [name, surname]);

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
    </Card>
  );
};

export default Greeting;
