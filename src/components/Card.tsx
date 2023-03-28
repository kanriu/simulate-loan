import "../styles/card.css";
import { Text } from "./Text";

interface Props {
  montlyAmount: number;
  children: any;
  isError: boolean;
}

export const Card = ({ montlyAmount, children, isError }: Props) => {
  return (
    <section className="card_container">
      <Text className="text_regular size_3">Tu cuota mensual será:</Text>
      <Text
        className={`text_bold size_1 mb_16${isError ? " opacity" : ""}`}
      >{`S/ ${montlyAmount}`}</Text>
      <section className="card_section">{children}</section>
    </section>
  );
};
