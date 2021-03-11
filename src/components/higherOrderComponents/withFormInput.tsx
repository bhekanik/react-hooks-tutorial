import { Component, ComponentType } from "react";

export interface WithFormInputProps extends Record<string, unknown> {
  value: string;
  onChange: (e: { target: { value: string } }) => void;
}

interface State {
  value: string;
}

const withFormInput = <T extends Record<string, unknown>>(
  WrappedComponent: ComponentType<T & WithFormInputProps>,
  initialValue?: string
) =>
  class withLocale extends Component<T, State> {
    state = {
      value: initialValue || "",
    };

    handleChange = (e: { target: { value: string } }): void => {
      this.setState({
        value: e.target.value,
      });
    };

    render() {
      const { value } = this.state;
      return (
        <WrappedComponent
          {...(this.props as T)}
          value={value}
          onChange={this.handleChange}
        />
      );
    }
  };

export default withFormInput;
