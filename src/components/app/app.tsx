import { useCallback } from "react";
import { TBtn} from "../../types";
import { ThemeButtons, Cards, InputTags } from "../";
import { collectedData } from "../../data";
import { useDispatch } from "../../store";
import { getRandom, clearCards } from "../../store/reducerCards";

export const App = () => {
  const { btns, tags } = collectedData;
  const dispatch = useDispatch();

  const clickBtn = useCallback((btn: TBtn) => {
    dispatch(clearCards());
    setTimeout(() => dispatch(getRandom(btn.theme)), 0); //for animation
  }, []);

  return (
    <div className="app">
      <div className="row-items">
        <h1 className="app__title">MY QUIZ</h1>
      </div>
      <ThemeButtons btns={btns} callbackBtn={clickBtn} />
      <InputTags tags={tags} />
      <Cards />
    </div>
  );
};
