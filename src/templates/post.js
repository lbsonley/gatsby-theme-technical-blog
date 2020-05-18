import React from "react";
import { graphql } from "gatsby";
import Post from "../components/post";
import Grouping from "../contexts/grouping";
import SEO from "../components/seo";
import Layout from "../components/layout";

const PostTemplate = ({
  data: { mdx },
  pageContext: { basePath, categories, tags }
}) => (
  <Layout basePath={basePath}>
    <Grouping.Provider value={{ categories, tags }}>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.excerpt}
        article
      />
      <Post {...mdx} />
    </Grouping.Provider>
  </Layout>
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
