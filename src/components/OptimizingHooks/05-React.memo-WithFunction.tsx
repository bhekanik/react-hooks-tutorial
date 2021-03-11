import { useState, useCallback, FC, memo, useRef } from "react";
import styles from "../../styles/optimize.module.css";

interface Props {
  greeting: string;
  addHello: () => void;
}

/**
 *  Memoizing Functions
 *
 * - memo only works with basic data types such as strings, numbers and booleans
 * - It is not able to diff functions and objects
 *
 * - Counter rerenders whenever text input state changes
 * - To solve this we can use the useCallback hook to memoize the function that is passed
 *   through props
 *
 */
const App = () => {
  const [value, setValue] = useState<string>("");

  const addHello = useCallback(() => {
    setValue(value + "Hello");
  }, []);

  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Counter greeting="Hello" addHello={addHello} />
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
    </div>
  );
});

export default App;
