import { ComponentType, useState, ChangeEvent, FC } from "react";
import Row from "../Row";

const useFormInput = (
  initialValue: string,
  label: string
): [ComponentType, string] => {
  const [value, setValue] = useState<string>(initialValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const Input: FC = () => {
    return (
      <Row label={label}>
        <input value={value} onChange={handleChange} />
      </Row>
    );
  };
  return [Input, value];
};

export default useFormInput;
