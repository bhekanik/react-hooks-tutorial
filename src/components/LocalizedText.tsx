import { FC } from "react";
import { useLocale } from "../contexts";
import translations from "../i18n/translations";

interface Props {
  translationKey: string;
}

const LocalizedText: FC<Props> = ({ translationKey }) => {
  const { locale } = useLocale();

  return <>{translations[locale][translationKey]}</>;
};

export default LocalizedText;
