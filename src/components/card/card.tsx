import { useEffect, useState, memo } from "react";
import ReactMarkdown from "react-markdown";
import { TCardProps } from "../../types";
import { Button, IconPlus, IconMinus } from "../";

export const Card = memo(
  (props: { card: TCardProps }) => {
    const { color, item } = props.card;
    const { question, answer, tags = [] } = item;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (isOpen) {
        setIsOpen(false);
      }
    }, [props.card]);

    const blockStyle = `card__block card__block_color_${color}`;

    return (
      <div className="card">
        <div className={blockStyle}>
          <div className="card__intro">
            <h3 className="card__title" onClick={() => setIsOpen(!isOpen)}>
              {question}
            </h3>
            <Button newClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IconMinus scale={1.5} /> : <IconPlus scale={1.5} />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className={blockStyle}>
            <ReactMarkdown className="card__paragraph">
              {answer}
            </ReactMarkdown>
            <div className="card__tags">
              {tags.map((tag, i) => <span key={i}>#{tag}</span>)}
            </div>
          </div>
        )}
      </div>
    );
  }
);
