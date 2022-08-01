import { Button } from "../button/button";
import { Card } from "../card/card";
import { TCard, TThemes, TBtn } from "../../types";
import { cards } from "../../data/questions";
import { getRandomItem } from "../../helpers";
import { useState } from "react";

const btns: TBtn[] = [
  { color: "purple", theme: "html" },
  { color: "orange", theme: "css" },
  { color: "green", theme: "js" },
];

export const App = () => {
  const [card, setCard] = useState<{
    color: string;
    item: TCard;
  } | null>(null);

  const clickBtn = (btn: TBtn) => {
    const newCard = getRandomItem(cards[btn.theme]);
    if (newCard) {
      setCard({ color: btn.color, item: newCard });
    }
  };

  return (
    <div className="app">
      <div className="row-items">
        <h1 className="app__title">MY QUIZ</h1>
      </div>
      <div className="row-items">
        {btns.map((b, i) => (
          <Button
            text={b.theme}
            color={b.color}
            key={i}
            newClick={() => clickBtn(b)}
          />
        ))}
      </div>
      {card && <Card card={card} />}
    </div>
  );
};
