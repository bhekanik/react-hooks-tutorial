import { useState, FC, memo, useRef } from "react";
import styles from "../../styles/optimize.module.css";

interface Props {
  greeting: string;
}

/**
 *  Memoizing Components
 *
 */
const App = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Counter greeting="Hello" />
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
