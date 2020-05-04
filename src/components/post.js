import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Post = ({ id, body, frontmatter }) => {
  const { title, tags, date } = frontmatter;

  return (
    <>
      <h1>{title}</h1>
      <time>{date}</time>
      {tags.map(tag => <span key={tag}>{tag}</span>)}
      <MDXRenderer>{body}</MDXRenderer>
    </>
  );
};

export default Post;
