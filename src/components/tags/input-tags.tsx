import { FC, useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useDispatch } from "../../store";

import { addTag } from "../../store/reducerCards";
import { TTag } from "../../types/";

type TInputTags = {
  tags: TTag[];
};

type TInputAutoTags = {
  filteredTags: TTag[];
  showOptions: boolean;
  userInput: string;
};

//---tags--
export const InputTags: FC<TInputTags> = (props) => {
  const { tags } = props;

  const initState: TInputAutoTags = useMemo(
    () => ({
      filteredTags: [],
      showOptions: false,
      userInput: "",
    }),
    []
  );

  const [state, setState] = useState<TInputAutoTags>(initState);
  const optionsRef = useRef<HTMLUListElement>(null);
  const dispatch = useDispatch();
  
  const onChangeInput = useCallback(
    (event: { currentTarget: { value: string } }) => {
      const userInput = event.currentTarget.value.toLowerCase() || "";
      const filteredTags = userInput
        ? tags
            .filter((tag) => tag.text.startsWith(userInput))
            .sort((a, b) => (a.text < b.text ? -1 : 1))
        : [];

      setState({
        ...state,
        filteredTags,
        showOptions: Boolean(filteredTags.length),
        userInput: event.currentTarget.value,
      });
    },
    [tags, state, setState]
  );

  const clickOption = useCallback((tag: TTag) => {
    dispatch(addTag(tag));
    setState({...initState, userInput: tag.text});
  }, []);

  //missClick
      useEffect(() => {
        const clickDocument = (event: MouseEvent) => {
          if (optionsRef.current && !optionsRef.current.contains(event.target as HTMLElement)) {
            setState({ ...initState });
          }
        };

        if (state.showOptions) {
          document.addEventListener("click", clickDocument);
        } else {
          document.removeEventListener("click", clickDocument);
        };
      }, [state.showOptions, initState]);

  const { filteredTags, showOptions, userInput } = state;

  return (
    <>  
      <div className="input">
        <input
          className="input__field"
          type="text"
          placeholder="or type tag here"
          onChange={onChangeInput}
          value={userInput}
        />
        {showOptions && (
          <ul className="autocomplete" ref={optionsRef}>
            {filteredTags.map((tag, index) => (
              <li
                className={`autocomplete__option autocomplete__option_color_${tag.color}`}
                key={index}
                onClick={() => clickOption(tag)}
              >
                {tag.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
