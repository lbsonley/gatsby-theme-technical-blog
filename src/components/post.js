import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Box, Styled } from "theme-ui";
import UiDate from "./ui-date";
import Tags from "./tags";
import Grouping from "../contexts/grouping";

const Post = ({ body, frontmatter }) => {
  const { title, tags, date } = frontmatter;

  return (
    <Grouping.Consumer>
      {(grouping) => (
        <>
          <Styled.h2>{title}</Styled.h2>
          <UiDate timestamp={date} />
          {grouping.tags ? <Tags tags={tags} /> : null}
          <Box mt={5}>
            <MDXRenderer>{body}</MDXRenderer>
          </Box>
        </>
      )}
    </Grouping.Consumer>
  );
};

export default Post;
