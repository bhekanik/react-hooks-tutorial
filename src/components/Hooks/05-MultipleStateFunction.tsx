import { ChangeEvent, useState } from "react";
import Card from "../Card";
import Row from "../Row";

const Greeting: React.FC = () => {
  const [name, setName] = useState<string>("Tony");
  const [surname, setSurname] = useState<string>("Stark");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };

  return (
    <Card>
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
