import React from "react";
import "./Tag.css";
const Tag = ({setQuery}) => {
  const tags = [
    "nature",
    "river",
    "hill",
    "hotel",
    "paris",
    "maldives",
    "aurtralia",
    "thailand",
    "mountains",
    "food",
    "family vacation",
    "children"
  ];
  return (
    <div className="tags">
      {tags.map((tag,index) => (
        <div className="tag" onClick={()=>setQuery(tag)} key={index} >{tag}</div>
      ))}
    </div>
  );
};

export default Tag;
