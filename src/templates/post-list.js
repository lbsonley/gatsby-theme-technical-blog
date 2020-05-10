import React from "react";
import { graphql } from "gatsby";
import PostList from "../components/post-list";

const PostListTemplate = ({ data: { allMdx } }) => (
  <PostList posts={allMdx.edges} />
);

export const query = graphql`
  query BlogPostsQuery {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
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

export default PostListTemplate;
