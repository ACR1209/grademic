import { Tag } from "@/types/reviews";
import { pb } from "@/utils/pocketbase";
import React, { useEffect, useState } from "react";
import TagButton from "./TagButton";

type TagSelectorProps = {
  selectedTags: Tag[];
  setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
};

function TagSelector(props: TagSelectorProps) {
  const [displayedTags, setDisplayedTags] = useState<Tag[]>([]);

  async function getTags() {
    try {
      const tagsFromDB = await pb.collection("tags").getFullList<Tag>({});
      setDisplayedTags(tagsFromDB);
    } catch (error) {
      return;
    }
  }

  useEffect(() => {
    getTags();
  }, []);

  return <div className="flex w-full flex-wrap gap-2">
    {
        displayedTags.map((tag)=> (
            <TagButton selected={props.selectedTags} setSelected={props.setSelectedTags} tag={tag} key={tag.id}/>
        ))
    }
  </div>;
}

export default TagSelector;
