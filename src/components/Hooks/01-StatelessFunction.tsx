import { FC } from "react";
import Card from "../Card";
import Row from "../Row";

interface Props {
  name?: string;
}

const Greeting: FC<Props> = ({ name = "Vision" }) => {
  return (
    <Card>
      <Row label="name">
        <p>{name}</p>
      </Row>
    </Card>
  );
};

export default Greeting;
