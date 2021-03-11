import { ChangeEvent, Component } from "react";
import withFormInput, {
  WithFormInputProps,
} from "./higherOrderComponents/withFormInput";

interface OwnProps extends Record<string, unknown> {
  initialValue: string;
  name: string;
  handleChange?: (field: string, value: string) => void;
}

type Props = WithFormInputProps & OwnProps;

class Input extends Component<Props> {
  componentDidMount() {
    const { onChange, handleChange, name, initialValue } = this.props;
    if (initialValue) {
      onChange({ target: { value: initialValue } });
      handleChange && handleChange(name, initialValue);
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { onChange, handleChange, name } = this.props;
    onChange(e);
    handleChange && handleChange(name, e.target.value);
  };

  render() {
    const { value } = this.props;
    return <input value={value} onChange={this.handleChange} />;
  }
}

export default withFormInput<OwnProps>(Input);
