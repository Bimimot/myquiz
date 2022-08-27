import { useCallback, useState, useEffect } from "react";
import { TBtn, TTag, TCardProps } from "../../types";
import { Button, Card, InputTags } from "../";
import { cards } from "../../data";
import { getFreshItem, collectBtns, collectTags } from "../../helpers";

export const App = () => {
  const [btns, setBtns] = useState<TBtn[]>([]);
  const [tags, setTags] = useState<TTag[]>([]);
  const [card, setCard] = useState<TCardProps | null>(null);
  const [newCard, setNewCard] = useState<TCardProps | null>(null);

  const clickBtn = useCallback((btn: TBtn) => {
    const newCard = getFreshItem(cards[btn.theme]);
    setCard(null);
    setNewCard({ color: btn.color, item: newCard });
  }, []);

  //useEffect for animation  - hide card & render again
  useEffect(() => {
    if (newCard) {
      setCard(newCard);
    }
  }, [newCard]);

  useEffect(() => {
    setBtns(collectBtns(cards));
    setTags(collectTags(cards));
  }, []);

  return (
    <div className="app">
      <div className="row-items">
        <h1 className="app__title">MY QUIZ</h1>
      </div>

      <div className="row-items row-items_space_between">
        {btns.map((b, i) => (
          <Button
            text={b.theme}
            subText={b.count.toString()}
            color={b.color}
            key={i}
            newClick={() => clickBtn(b)}
          />
        ))}
      </div>
      <InputTags tags={tags} />
      {card && <Card card={card} />}
    </div>
  );
};
