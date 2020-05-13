import React from "react";
import { graphql } from "gatsby";
import Post from "../components/post";
import Grouping from "../contexts/grouping";

const PostTemplate = ({ data: { mdx }, pageContext: { categories, tags } }) => (
  <Grouping.Provider value={{ categories, tags }}>
    <Post {...mdx} />
  </Grouping.Provider>
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
