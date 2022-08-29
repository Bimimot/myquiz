import { FC } from "react";
import { TBtn } from "../../types";
import { Button } from "../";

export const ThemeButtons: FC<{ btns: TBtn[]; callbackBtn: Function }> = (props) => {
  const { btns, callbackBtn } = props;

  return (
    <div className="row-items row-items_space_between">
      {btns.map((b, i) => (
        <Button
          text={b.theme}
          subText={b.count.toString()}
          color={b.color}
          key={i}
          newClick={() => callbackBtn(b)}
        />
      ))}
    </div>
  );
};
