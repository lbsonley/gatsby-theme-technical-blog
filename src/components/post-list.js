/** @jsx jsx */
import React from "react";
import { jsx, Styled, Container, Heading } from "theme-ui";
import UiDate from "./ui-date";
import Tags from "./tags";

const PostListItem = ({ id, excerpt, frontmatter, fields }) => {
  const { title, date, tags } = frontmatter;
  const { slug } = fields;
  return (
    <li
      sx={{
        p: 4,
        borderBottomWidth: "thin",
        borderBottomStyle: "solid",
        borderBottomColor: "muted" 
      }}
    >
      <Styled.a href={slug}>
        <Heading variant="h3" as="h2" pb={3}>{title}</Heading>
      </Styled.a>
        <UiDate timestamp={date} />
        <Tags tags={tags} />
        <Styled.p>{excerpt}</Styled.p>
    </li>
  );
};

const PostList = ({ posts }) => {
  return (
    <Container>
      <ul sx={{ listStyle: "none", m: 0, p: 0 }}>
        {posts.map(post => <PostListItem key={post.node.id} {...post.node} />)}
      </ul>
    </Container>
  );
};

export default PostList;
