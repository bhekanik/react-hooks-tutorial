import { ChangeEvent, FC, useState } from "react";
import Card from "../Card";
import Row from "../Row";

const Greeting: FC = () => {
  const [name, setName] = useState<string>("T'Chala");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Card>
      <Row label="Name">
        <input value={name} onChange={handleNameChange} />
      </Row>
    </Card>
  );
};

export default Greeting;
