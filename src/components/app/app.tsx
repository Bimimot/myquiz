import { useCallback, useState, useEffect } from "react";
import { TBtn, TTag } from "../../types";
import { Button, Cards, InputTags } from "../";
import { cards } from "../../data";
import { collectBtns, collectTags } from "../../helpers";
import { useDispatch } from "../../store";
import { getRandom, clearCards } from "../../store/reducerCards";

export const App = () => {
  const [btns, setBtns] = useState<TBtn[]>([]);
  const [tags, setTags] = useState<TTag[]>([]);
  const dispatch = useDispatch();

  const clickBtn = useCallback((btn: TBtn) => {
    dispatch(clearCards());
    setTimeout(() => dispatch(getRandom({ btn })), 0); //for animation
  }, []);

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
      <Cards />
    </div>
  );
};
