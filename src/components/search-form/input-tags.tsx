import { FC, useState, useCallback, useMemo } from "react";


type TInputTags = {
  tags: string[];
  onChoiceCallback: Function;
};

type TInputAutoTags = {
  filteredTags: string[];
  showOptions: boolean;
  userInput: string;
};

//---tags--
export const InputTags: FC<TInputTags> = (props) => {
  //options: [{name: string, id: number}]
  const { tags, onChoiceCallback } = props;
    console.log(tags);
    
  const initState: TInputAutoTags = useMemo(() =>
    ({
      filteredTags: [],
      showOptions: false,
      userInput: "",
    }),
    []
  );

  const [state, setState] = useState<TInputAutoTags>(initState);

  const onChangeInput = useCallback((event: { currentTarget: { value: string; }; }) => {
      const userInput =  event.currentTarget.value || "";

      const filteredTags =
        !!tags && !!tags.length
          ? tags.filter(tag => tag.indexOf(userInput.toLowerCase()) !== -1)
          : [];
      setState({
        filteredTags,
        showOptions: true,
        userInput: event.currentTarget.value,
      });
    },
    [tags, setState]
  );

  const onClickOption = useCallback(
    (tag: string) => {
      //onChoiceCallback(e.currentTarget.innerText);
      onChoiceCallback(tag);
      setState(initState);
    },
    [setState, initState, onChoiceCallback]
  );

  const { filteredTags, showOptions, userInput } = state;

  return (
    <div className="input">
      <input
        className="input__field"
        type="text"
        placeholder="Type tag here"
        onChange={onChangeInput}
        value={userInput}
      />
      {showOptions && userInput && !!filteredTags.length ? (
        <ul className="autocomplete">
          {filteredTags.map((tag, index) => (
            <li
              className="autocomplete__option"
              //   ${
              //     index === activeOptionIndex
              //       ? "autocomplete__option_type_active"
              //       : ""
              //   }`}
              key={index}
              onClick={() => onClickOption(tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

