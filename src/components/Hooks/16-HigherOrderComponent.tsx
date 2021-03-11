import { Component } from "react";
import Card from "../Card";
import withLocale, {
  WithLocaleProps,
} from "../higherOrderComponents/withLocale";
import withWindowWidth, {
  WithWindowWidthProps,
} from "../higherOrderComponents/withWindowWidth";
import Input from "../Input";
import DocumentTitle from "../RenderProps/DocumentTitle";
import Theme from "../RenderProps/Theme";
import Row from "../Row";

interface State {
  name: string;
  surname: string;
}

type Props = WithLocaleProps & WithWindowWidthProps;

class Greeting extends Component<Props, State> {
  state = {
    name: "",
    surname: "",
  };

  handleTitleChange = (field: string, value: string): void => {
    this.setState((currentState) => ({ ...currentState, [field]: value }));
  };

  render() {
    const { flag, width, getLocalizedValue } = this.props;

    return (
      <Theme
        render={(theme) => (
          <DocumentTitle
            title={this.state.name + " " + this.state.surname}
            render={() => (
              <Card theme={theme}>
                <Row label={getLocalizedValue("name")}>
                  <Input
                    initialValue="Wanda"
                    name="name"
                    handleChange={this.handleTitleChange}
                  />
                </Row>
                <Row label={getLocalizedValue("surname")}>
                  <Input
                    initialValue="Maximov"
                    name="surname"
                    handleChange={this.handleTitleChange}
                  />
                </Row>
                <Row label={getLocalizedValue("windowWidth")}>{width}</Row>
                <Row label={getLocalizedValue("locale")}>{flag}</Row>
              </Card>
            )}
          />
        )}
      />
    );
  }
}

export default withWindowWidth(withLocale(Greeting));
