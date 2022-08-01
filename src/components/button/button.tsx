import React, { FC, MouseEventHandler, ReactNode } from "react";

type TButton = {
  text?: string;
  newClick: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  children?: ReactNode;
};

export const Button: FC<TButton> = React.memo((props: TButton) => {
  const { text, newClick, color, children } = props;

  const styleClass = `button button_color_${color}`;

  return (
    <button className={styleClass} onClick={newClick}>
      {text && <span className="button__text">{text.toUpperCase()}</span>}
      {children && children}
    </button>
  );
});

