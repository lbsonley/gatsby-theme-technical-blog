import React from "react";
import { graphql } from "gatsby";
import { Container } from "theme-ui";
import PostList from "../components/post-list";
import Grouping from "../contexts/grouping";
import SEO from "../components/seo";

const PostListTemplate = ({
  data: { allMdx },
  pageContext: { categories, tags },
}) => (
  <Container>
    <Grouping.Provider value={{ categories, tags }}>
      <SEO />
      <PostList posts={allMdx.edges} />
    </Grouping.Provider>
  </Container>
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
