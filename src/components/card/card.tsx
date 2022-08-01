import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { TCard } from "../../types";
import { IconPlus, IconMinus } from "../icons";
import { Button } from "../button/button";
import { escapeHtml } from "../../helpers";

export const Card = (props: { card: { color: string; item: TCard } }) => {
  const { color, item } = props.card;
  const { question, answer } = item;
  //   const paragraphs = answer
  //     .split(". ")
  //     .map((p) => escapeHtml(p).replace('.', '. ') + ".");
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

      <div className={`${blockStyle} card__block_show_${isOpen}`}>
        <ReactMarkdown className="card__paragraph">
          {answer}
        </ReactMarkdown>
      </div>
    </div>
  );
};

// import remarkGfm from "remark-gfm";

// export const FaqCard = (props: { card: TFaqCard }) => {
//   const {
//     card: { title, paragraphs },
//   } = props;
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="faq-card">
//       <div
//         className={`faq-card__intro ${
//           isOpen ? "faq-card__intro_mode_open" : ""
//         }`}
//       >
//         <h3 className="faq-card__title" onClick={() => setIsOpen(!isOpen)}>
//           {title}
//         </h3>
//         <Button newClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <IconMinus /> : <IconPlus />}
//         </Button>
//       </div>
//       {isOpen && (
//         <div className="faq-card__content">
//           {paragraphs.map((paragraph, i) => (
//             <ReactMarkdown
//               className="faq-card__paragraph"
//               key={i}
//               // remarkPlugins={[remarkGfm]}
//             >
//               {paragraph}
//             </ReactMarkdown>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
