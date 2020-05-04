import React from "react";
import { graphql } from "gatsby";
import Post from "../components/post";

const PostTemplate = ({ data: { mdx } }) => <Post {...mdx} />;

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
