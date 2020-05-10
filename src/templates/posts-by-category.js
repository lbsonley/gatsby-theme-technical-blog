import React from "react";
import { graphql } from "gatsby";
import PostList from "../components/post-list";

const PostsByCategory = ({ data: { allMdx }}) => {
  return (
    <PostList posts={allMdx.edges} />
  )
}

export const query = graphql`
  query PostsByCategory($category: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true },
          category: { in: [$category] }
        }
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
