import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Post = ({ data: { mdx } }) => {
  return (
    <>
      <h1>{mdx.frontmatter.title}</h1>
      <time>{mdx.frontmatter.data}</time>
      {mdx.frontmatter.tags.map(tag => <span>{tag}</span>)}
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </>
  );
};

export const query = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;

export default Post;
