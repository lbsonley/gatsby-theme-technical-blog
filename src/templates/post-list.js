import React from "react";
import { graphql } from "gatsby";
import PostList from "../components/post-list";

const PostListTemplate = ({ data: { allMdx } }) => (
  <PostList posts={allMdx.edges} />
);

export const query = graphql`
  query BlogPostsQuery {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
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
