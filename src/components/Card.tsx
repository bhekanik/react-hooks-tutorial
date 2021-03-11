import { FC } from "react";
import styles from "../styles/card.module.css";

interface Props {
  theme?: string;
}

const Card: FC<Props> = ({ theme, children }) => {
  return (
    <div className={theme === "dark" ? styles.cardDark : styles.card}>
      {children}
    </div>
  );
};

export default Card;
