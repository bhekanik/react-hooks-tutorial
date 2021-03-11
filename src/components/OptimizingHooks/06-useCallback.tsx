import { useState, useCallback, FC, memo, useRef } from "react";
import styles from "../../styles/optimize.module.css";

interface Props {
  greeting: string;
  addHello: () => void;
  myObject: Record<string, string>;
}

/**
 *  Memoizing Functions
 *
 * - The memoized function only changes if the dependencies change
 *
 * - We can show that this works by adding a second input with it's own state
 *
 */
const App = () => {
  const [value, setValue] = useState<string>("");

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
      <Counter
        greeting={value}
        addHello={addHello}
        myObject={{ key: "value" }}
      />
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
