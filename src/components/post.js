import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container, Heading } from "theme-ui";

const Post = ({ id, body, frontmatter }) => {
  const { title, tags, date } = frontmatter;

  return (
    <Container>
      <Heading variant="h2" as="h1" sx={{ pb: 3 }}>{title}</Heading>
      <time>{date}</time>
      {tags.map(tag => <span key={tag}>{tag}</span>)}
      <MDXRenderer>{body}</MDXRenderer>
    </Container>
  );
};

export default Post;
