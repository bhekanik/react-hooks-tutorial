import { Component, ChangeEvent } from "react";
import { ThemeContext } from "../../contexts";
import Card from "../Card";
import Row from "../Row";

interface State {
  name: string;
  surname: string;
  width: number;
}

export class Greeting extends Component<{}, State> {
  state = {
    name: "Sam",
    surname: "Wilson",
    width: 0,
  };

  componentDidMount() {
    document.title = this.state.name + " " + this.state.surname;
    this.setState({ width: window.innerWidth });
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.surname;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
    });
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
    const { name, surname, width } = this.state;

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
            <Row label="Window Width">{width}</Row>
          </Card>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Greeting;
