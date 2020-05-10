/** @jsx jsx */
import { jsx, Styled, Container, Heading } from "theme-ui";
import Layout from "./layout";
import UiDate from "./ui-date";
import Tags from "./tags";
import Category from "./category";

const PostListItem = ({ id, excerpt, frontmatter, fields }) => {
  const { title, date, tags, category } = frontmatter;
  const { slug } = fields;

  

  return (
    <li
      sx={{
        p: 4,
        borderBottomWidth: "thin",
        borderBottomStyle: "solid",
        borderBottomColor: "muted",
      }}
    >
      <Styled.a href={slug}>
        <Heading variant="h3" as="h2" pb={3}>
          {title}
        </Heading>
      </Styled.a>
      <UiDate timestamp={date} />
      <Category name={category} />
      <Styled.p sx={{ mt: 3 }}>{excerpt}</Styled.p>
      <Tags tags={tags} />
    </li>
  );
};

const PostList = ({ posts }) => {
  return (
    <Layout>
      <Container>
        <ul sx={{ listStyle: "none", m: 0, p: 0 }}>
          {posts.map((post) => (
            <PostListItem key={post.node.id} {...post.node} />
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default PostList;
