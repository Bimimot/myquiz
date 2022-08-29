import { useSelector } from "../../store";
import { Card } from "./card";

export const Cards = () => {
  const cards = useSelector((state) => state.cards);

  return (
    <div className="">
      {cards.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
};
