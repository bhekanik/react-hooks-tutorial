import { useState, FC, memo, useRef } from "react";
import styles from "../../styles/optimize.module.css";

/**
 *  Memoizing Components
 *
 * - Usesmemo HOC.
 * - Similar to PureComponent but for functional components
 * - Allow us to memoize component so that we can control when to render
 *
 * - Counter component doesn't rerender when text input state changes
 * - A memoized component will check whether props changed or not each time
 *   there is a rerender
 * - We can prove this by passing a prop to Counter
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
      <Counter />
    </div>
  );
};

const Counter: FC = memo(() => {
  const [counter, setCounter] = useState<number>(0);
  const renders = useRef<number>(0);

  return (
    <div className={styles.counter}>
      <p>Counter: {counter}</p>
      <p>Renders: {renders.current++}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
    </div>
  );
});

export default App;
