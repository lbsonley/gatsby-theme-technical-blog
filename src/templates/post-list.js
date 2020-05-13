import React from "react";
import { graphql } from "gatsby";
import PostList from "../components/post-list";
import Grouping from "../contexts/grouping.js";

const PostListTemplate = ({ data: { allMdx }, pageContext }) => (
  <Grouping.Provider value={pageContext} >
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
