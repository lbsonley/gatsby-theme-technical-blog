import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Box, Container, Styled } from "theme-ui";
import Layout from "./layout";
import UiDate from "./ui-date";
import Tags from "./tags";

const Post = ({ id, body, frontmatter }) => {
  const { title, tags, date } = frontmatter;

  return (
    <Layout>
      <Container>
        <Styled.h2>{title}</Styled.h2>
        <UiDate timestamp={date} />
        <Tags tags={tags} />
        <Box mt={5}>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
      </Container>
    </Layout>
  );
};

export default Post;
