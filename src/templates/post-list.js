import React from "react";
import { graphql } from "gatsby";
import PostList from "../components/post-list";
import Grouping from "../contexts/grouping";
import SEO from "../components/seo";

const PostListTemplate = ({
  data: { allMdx },
  pageContext: { categories, tags },
}) => (
  <Grouping.Provider value={{ categories, tags }}>
    <SEO />
    <PostList posts={allMdx.edges} />
  </Grouping.Provider>
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
