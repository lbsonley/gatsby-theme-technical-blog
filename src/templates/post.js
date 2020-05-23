import React from "react";
import { graphql } from "gatsby";
import { Container } from "theme-ui";
import Post from "../components/post";
import Grouping from "../contexts/grouping";
import SEO from "../components/seo";

const PostTemplate = ({ data: { mdx }, pageContext: { categories, tags } }) => (
  <Container>
    <Grouping.Provider value={{ categories, tags }}>
      <SEO title={mdx.frontmatter.title} description={mdx.excerpt} article />
      <Post {...mdx} />
    </Grouping.Provider>
  </Container>
);

export const query = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;

export default PostTemplate;
