import { useState, useRef } from "react";
import styles from "../../styles/optimize.module.css";

/**
 * Unnecessary Rerenders
 *
 * The component is being rerendered whenever counter state changes
 * Component is also rerendered whenever text input state changes
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
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const renders = useRef<number>(0);

  return (
    <div className={styles.counter}>
      <p>Counter: {counter}</p>
      <p>Renders: {renders.current++}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
    </div>
  );
};

export default App;
