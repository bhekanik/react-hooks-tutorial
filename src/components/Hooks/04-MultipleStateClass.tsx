import { ChangeEvent, Component } from "react";
import Card from "../Card";
import Row from "../Row";

interface State {
  name: string;
  surname: string;
}

export class Greeting extends Component<{}, State> {
  state = {
    name: "Steve",
    surname: "Rogers",
  };

  handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      surname: e.target.value,
    });
  };

  render() {
    const { name, surname } = this.state;

    return (
      <Card>
        <Row label="Name">
          <input value={name} onChange={this.handleNameChange} />
        </Row>
        <Row label="Surname">
          <input value={surname} onChange={this.handleSurnameChange} />
        </Row>
      </Card>
    );
  }
}

export default Greeting;
