import { ChangeEvent, Component } from "react";
import Card from "../Card";
import Row from "../Row";

interface State {
  name: string;
}

export class Greeting extends Component<{}, State> {
  state = {
    name: "Loki",
  };

  handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    const { name } = this.state;

    return (
      <Card>
        <Row label="Name">
          <input value={name} onChange={this.handleNameChange} />
        </Row>
      </Card>
    );
  }
}

export default Greeting;
