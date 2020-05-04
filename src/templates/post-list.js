import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostList from "../components/post-list";

const PostListTemplate = ({ data: { allMdx } }) => {
  return (
    <Layout>
      <PostList posts={allMdx.edges} />
    </Layout>
  );
};

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
