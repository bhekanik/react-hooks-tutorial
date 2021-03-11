import { Component, ChangeEvent } from "react";
import Card from "../Card";
import withWindowWidth, {
  WithWindowWidthProps,
} from "../higherOrderComponents/withWindowWidth";
import Theme from "../RenderProps/Theme";
import Row from "../Row";

interface State {
  name: string;
  surname: string;
}

type Props = WithWindowWidthProps;

export class Greeting extends Component<Props, State> {
  state = {
    name: "Peter",
    surname: "Quill",
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
    const { width } = this.props;

    return (
      <Theme
        render={(theme) => (
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
      />
    );
  }
}

export default withWindowWidth(Greeting);
