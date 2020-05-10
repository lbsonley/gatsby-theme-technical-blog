/** @jsx jsx */
import React from "react";
import { graphql } from "gatsby";
import { jsx, Styled } from "theme-ui";
import PostList from "../components/post-list";

const PostsByCategory = ({ data: { allMdx }, pageContext: { category } }) => {
  return (
    <>
      <Styled.h2 sx={{ fontSize: 3 }}>Category: {category}</Styled.h2>
      <PostList posts={allMdx.edges} />
    </>
  );
};

export const query = graphql`
  query PostsByCategory($category: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, category: { in: [$category] } }
      }
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

export default PostsByCategory;
