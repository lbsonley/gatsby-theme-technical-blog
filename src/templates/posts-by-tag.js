import React from "react";
import { graphql } from "gatsby";
import PostList from "../components/post-list";
import SubTitle from "../components/subtitle";
import SEO from "../components/seo";
import Layout from "../components/layout";

const PostsByTag = ({
  data: { allMdx },
  pageContext: { basePath, tag, seoTitle }
}) => {
  return (
    <Layout basePath={basePath}>
      <SEO title={`${seoTitle} ${tag}`} />
      <SubTitle tag={tag} />
      <PostList posts={allMdx.edges} />
    </Layout>
  );
};

export const query = graphql`
  query PostsByTag($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, tags: { in: [$tag] } } }
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

export default PostsByTag;
