import { FC } from "react";
import styles from "../styles/row.module.css";

interface Props {
  label: string;
}

const Row: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <span>{props.label}</span>
      <hr />
      {props.children}
    </div>
  );
};

export default Row;
