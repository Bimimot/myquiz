import { useCallback, useState, useEffect } from "react";
import { Button } from "../button/button";
import { Card } from "../card/card";
import { TBtn, TCardProps } from "../../types";
import { cards } from "../../data/questions";
import { getRandomItem } from "../../helpers";


const btns: TBtn[] = [
  { color: "magenta", theme: "html" },
  { color: "orange", theme: "css" },
  { color: "green", theme: "js" },
  { color: "blue", theme: "react" },
];

export const App = () => {
    const [card, setCard] = useState<TCardProps | null>(null);
    const [newCard, setNewCard] = useState<TCardProps | null>(null);

  const clickBtn = useCallback((btn: TBtn) => {
      setCard(null);
      const newCard = getRandomItem(cards[btn.theme]);      
    if (newCard) {
      setNewCard({ color: btn.color, item: newCard });
    }
  }, []);
    
  //useEffect for animation  - hide card & render again
    useEffect(() => {
    if (newCard) {
      setCard(newCard);
    }
    },[newCard])

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
