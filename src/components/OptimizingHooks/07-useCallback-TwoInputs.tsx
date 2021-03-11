import { useState, useCallback, FC, memo, useRef } from "react";
import styles from "../../styles/optimize.module.css";

interface Props {
  greeting: string;
  addHello: () => void;
}

/**
 *  Memoizing Functions
 *
 * - If you type in the new text field the counter component doesn't rerender because
 *   because the memoized function will ignore changes that don't affect its dependency
 *
 * - Currently Counter is rerendering when state changes because the myObject prop is still
 *   not memoized.
 *
 */
// Two inputs
const App = () => {
  const [value, setValue] = useState<string>("");
  const [newValue, setNewValue] = useState<string>("");

  const addHello = useCallback(() => {
    setValue(value + "Hello");
  }, [value]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <input
        type="text"
        onChange={(e) => setNewValue(e.target.value)}
        value={newValue}
      />
      <Counter greeting={value} addHello={addHello} />
    </div>
  );
};

const Counter: FC<Props> = memo((props) => {
  const [counter, setCounter] = useState<number>(0);
  const renders = useRef<number>(0);

  return (
    <div className={styles.counter}>
      <p>Greeting: {props.greeting}</p>
      <p>Counter: {counter}</p>
      <p>Renders: {renders.current++}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
      <button onClick={() => props.addHello()}>Add Hello</button>
    </div>
  );
});

export default App;
