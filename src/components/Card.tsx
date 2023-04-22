import "../styles/card.css";
import { Text } from "./Text";

interface Props {
  title: string;
  monthlyAmount: string;
  children: any;
  isError: boolean;
}

export const Card = ({ title, monthlyAmount, children, isError }: Props) => {
  return (
    <section className="card_container">
      <Text className="text_regular size_3">{title}</Text>
      <Text className={`text_bold size_1 mb_16${isError ? " opacity" : ""}`}>
        {monthlyAmount}
      </Text>
      <section className="card_section">{children}</section>
    </section>
  );
};
