import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Post from "../components/post";

const PostTemplate = ({ data: { mdx } }) => (
  <Layout>
    <Post {...mdx} />
  </Layout>
);

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

export default PostTemplate;
