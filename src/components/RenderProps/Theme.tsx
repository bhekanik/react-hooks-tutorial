import { Component, ChangeEvent } from "react";
import { ThemeContext } from "../../contexts";
import styles from "../../styles/renderProps.module.css";
import LocalizedText from "../LocalizedText";

interface OwnProps {
  render(theme: string): JSX.Element;
}

type Props = OwnProps;

class Theme extends Component<Props> {
  render() {
    const { render } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (setTheme) setTheme(e.target.checked ? "dark" : "light");
                }}
              />
              <LocalizedText translationKey="themeToggle" />
            </label>
            {render(theme)}
          </>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Theme;
