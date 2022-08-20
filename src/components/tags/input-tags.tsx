import { FC, useState, useCallback, useMemo } from "react";
import { TTag } from "../../types/";

type TInputTags = {
  tags: TTag[];
};

type TInputAutoTags = {
  filteredTags: TTag[];
  checkedTags: TTag[];
  showOptions: boolean;
  userInput: string;
};

//---tags--
export const InputTags: FC<TInputTags> = (props) => {
  const { tags } = props;

  const initState: TInputAutoTags = useMemo(
    () => ({
      filteredTags: [],
      checkedTags: [],
      showOptions: false,
      userInput: "",
    }),
    []
  );

  const [state, setState] = useState<TInputAutoTags>(initState);

  const onChangeInput = useCallback(
    (event: { currentTarget: { value: string } }) => {
      const userInput = (event.currentTarget.value).toLowerCase() || "";
      const filteredTags = userInput
        ? tags.filter((tag) => tag.text.startsWith(userInput)).sort((a,b) => a.text < b.text ? -1 : 1)
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

  const onClickOption = useCallback(
    (tag: TTag) => {
      const checkedTags: TTag[] = state.checkedTags.concat(tag);
      setState({ ...initState, checkedTags });
    },
    [setState, initState, state.checkedTags]
  );

  const { filteredTags, checkedTags, showOptions, userInput } = state;

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
          <ul className="autocomplete">
            {filteredTags.map((tag, index) => (
              <li
                className={`autocomplete__option autocomplete__option_color_${tag.color}`}
                key={index}
                onClick={() => onClickOption(tag)}
              >
                {tag.text}
              </li>
            ))}
          </ul>
        )}
      </div>
      <CheckedTags tags={checkedTags} />
    </>
  );
};

const CheckedTags: FC<TInputTags> = (props) => {
  const {tags} = props
  return (
    <div className="row-items">
      {tags.map((tag, i) => (
        <div className={`tag tag_color_${tag.color}`} key={i}>{tag.text}</div>
      ))}
    </div>
  );
}