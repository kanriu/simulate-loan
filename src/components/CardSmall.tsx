import { Text } from "./Text";
import "../styles/cardSmall.css";
import { memo } from "react";

interface Props {
  primary: string;
  secondary: string;
  separator?: boolean;
}

export const CardSmall = memo(
  ({ primary, secondary, separator }: Props) => {
    console.log("CARD SMALL");

    return (
      <article
        className={`card_small_container${
          separator ? " separator_vertical" : ""
        }`}
      >
        <Text className="text_regular size_3 m_5">{primary}</Text>
        <Text className="text_bold size_3 m_5">{secondary}</Text>
      </article>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.secondary === nextProps.secondary;
  }
);
