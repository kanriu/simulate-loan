import { Text } from "./Text";
import "../styles/cardSmall.css";

interface Props {
  title: string;
  subtitle: string;
  verticalSeparator?: boolean;
}

export const CardSmall = ({ title, subtitle, verticalSeparator }: Props) => {
  return (
    <article
      className={`card_small_container${
        verticalSeparator ? " separator_vertical" : ""
      }`}
    >
      <Text className="text_regular size_3 m_5">{title}</Text>
      <Text className="text_bold size_3 m_5">{subtitle}</Text>
    </article>
  );
};
