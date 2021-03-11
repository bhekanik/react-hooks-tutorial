import { ChangeEvent, Component } from "react";
import { ThemeContext } from "../../contexts";
import Card from "../Card";
import Row from "../Row";

interface State {
  name: string;
  surname: string;
}

export class Greeting extends Component<{}, State> {
  state = {
    name: "Natasha",
    surname: "Romanoff",
  };

  componentDidMount() {
    document.title = this.state.name + " " + this.state.surname;
  }

  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.surname;
  }

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
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Card theme={theme}>
            <Row label="Name">
              <input value={name} onChange={this.handleNameChange} />
            </Row>
            <Row label="Surname">
              <input value={surname} onChange={this.handleSurnameChange} />
            </Row>
          </Card>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Greeting;
