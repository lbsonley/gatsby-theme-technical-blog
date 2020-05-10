/** @jsx jsx */
import React from "react";
import { graphql } from "gatsby";
import { jsx, Styled } from "theme-ui";
import PostList from "../components/post-list";

const PostsByTag = ({ data: { allMdx }, pageContext: { tag } }) => {
  return (
    <>
      <Styled.h2 sx={{ fontSize: 3 }}>Tag: {tag}</Styled.h2>
      <PostList posts={allMdx.edges} />
    </>
  );
};

export const query = graphql`
  query PostsByTag($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            category
            tags
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default PostsByTag;
