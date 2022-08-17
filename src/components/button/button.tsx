import React, { FC, MouseEventHandler, ReactNode } from "react";

type TButton = {
  text?: string;
  subText?: string;
  newClick: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  children?: ReactNode;
};

export const Button: FC<TButton> = React.memo((props: TButton) => {
  const { text, subText, newClick, color, children } = props;

  const styleClass = `button button_color_${color}`;

  return (
    <button className={styleClass} onClick={newClick}>
      {text && <span className="button__text">{text.toUpperCase()}</span>}
      {subText && <span className="button__subtext">{subText}</span>}
      {children && children}
    </button>
  );
});

