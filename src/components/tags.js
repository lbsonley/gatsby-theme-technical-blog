/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Tag = ({ name }) => {
  return (
    <li
      sx={{
        display: "inline-block",
        borderRadius: "pill",
        bg: "primary",
        color: "background",
        py: 3,
        px: 5,
        mr: 3,
        my: 3
      }}
    >
      {name}
    </li>
  );
};

const Tags = ({ tags }) => {
  return (
    <ul sx={{ listStyle: "none", mx: 0, my: 5, p: 0 }}>
      {tags.map(tag => (
        <Tag key={tag} name={tag}>{tag}</Tag>
      ))}
    </ul>
  )
}

export default Tags;
