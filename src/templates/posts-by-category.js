/** @jsx jsx */
import React from "react";
import { graphql } from "gatsby";
import { jsx, Styled } from "theme-ui";
import PostList from "../components/post-list";
import SubTitle from "../components/subtitle";
import SEO from "../components/seo";

const PostsByCategory = ({
  data: { allMdx },
  pageContext: { category, seoTitle }
}) => {
  return (
    <>
      <SEO title={`${seoTitle} ${category}`} />
      <SubTitle category={category} />
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
