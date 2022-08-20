import { useCallback, useState, useEffect } from "react";
import { Button } from "../button/button";
import { Card } from "../card/card";
import { TBtn, TCardProps } from "../../types";
import { cards } from "../../data/questions";
import { getFreshItem, collectBtns, collectTags } from "../../helpers";
import { InputTags } from "../search-form/input-tags";

export const App = () => {
  const [btns, setBtns] = useState<TBtn[]>([]);
  const [tags, setTags] = useState<string[]>([]);
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
      <InputTags tags={tags} onChoiceCallback={(tag: string) => console.log("TAG =>", tag)} />
      <div className="row-items">
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
      {card && <Card card={card} />}
    </div>
  );
};
