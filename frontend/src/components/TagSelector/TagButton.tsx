import { Tag } from "@/types/reviews";
import { notoSerif } from "@/utils/fonts";
import React from "react";

type TagButtonProps = {
  tag: Tag;
  setSelected: React.Dispatch<React.SetStateAction<Tag[]>>;
  selected: Tag[];
};

function TagButton(props: TagButtonProps) {
  let isSelected =
    props.selected.find((t) => t.id === props.tag.id) !== undefined;

  function handleClick() {
    if (isSelected) {
      props.setSelected(props.selected.filter((t) => t.id !== props.tag.id));
      return;
    }

    if (props.selected.length === 3) {
        return
    }

    props.setSelected([...props.selected, props.tag]);
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`${notoSerif.className} hover:bg-grademic-yellow-600 font-bold ${isSelected ? 'bg-grademic-yellow-600'  : 'bg-gray-400'} rounded-full px-3 py-1 `}
    >
      {props.tag.name}
    </button>
  );
}

export default TagButton;
