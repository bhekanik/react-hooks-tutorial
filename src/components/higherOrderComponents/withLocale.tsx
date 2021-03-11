import { ChangeEvent, Component, ComponentType } from "react";
import styles from "../../styles/hoc.module.css";
import { LocaleContext } from "../../contexts";
import translations from "../../i18n/translations";

export interface WithLocaleProps {
  flag: string;
  locale: string;
  getLocalizedValue: (key: string) => string;
}

const withLocale = <T extends unknown>(WrappedComponent: ComponentType<T>) =>
  class withLocale extends Component<T> {
    handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      this.setState({ locale: e.target.value });
    };

    render() {
      return (
        <LocaleContext.Consumer>
          {({ locale, setLocale, getLocalizedValue }) => (
            <>
              <label className={styles.select}>
                {translations[locale]["languageToggle"]}
                <select
                  value={locale}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    if (setLocale) setLocale(e.target.value);
                  }}
                >
                  <option value="en">United Kingdom</option>
                  <option value="fr">France</option>
                </select>
              </label>
              <WrappedComponent
                {...(this.props as T)}
                flag={translations[locale]["flag"]}
                locale={locale}
                getLocalizedValue={getLocalizedValue}
              />
            </>
          )}
        </LocaleContext.Consumer>
      );
    }
  };

export default withLocale;
