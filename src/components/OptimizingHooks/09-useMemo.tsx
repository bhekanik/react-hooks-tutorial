import { useState, useCallback, useMemo, FC, memo, useRef } from "react";
import styles from "../../styles/optimize.module.css";

interface Props {
  greeting: string;
  addHello: () => void;
  myObject: Record<string, string>;
}

/**
 *  Memoizing Objects
 *
 * - We use the useMemo hook to memoize any value, including objects, by passing a create function
 *   and a dependency array.
 * - The value will only recompute when one of the dependencies has changed
 *
 */
const App = () => {
  const [value, setValue] = useState<string>("");
  const [newValue, setNewValue] = useState<string>("");

  const addHello = useCallback(() => {
    setValue(value + "Hello");
  }, [value]);
  const myObject = useMemo(() => ({ key: "value" }), []);

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
      <Counter greeting={value} addHello={addHello} myObject={myObject} />
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
