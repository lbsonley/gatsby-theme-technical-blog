/** @jsx jsx */
import { jsx, Styled, Heading } from "theme-ui";
import UiDate from "./ui-date";
import Tags from "./tags";
import Category from "./category";
import Grouping from "../contexts/grouping";

const PostListItem = ({ id, excerpt, frontmatter, fields }) => {
  const { title, date, tags, category } = frontmatter;
  const { slug } = fields;

  return (
    <Grouping.Consumer>
      {grouping => (
        <li
          sx={{
            p: 6,
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
          {grouping.categories ? <Category category={category} /> : null}
          <Styled.p sx={{ mt: 3 }}>{excerpt}</Styled.p>
          {grouping.tags ? <Tags tags={tags} /> : null}
        </li>
      )}
    </Grouping.Consumer>
  );
};

const PostList = ({ posts }) => {
  return (
    <ul sx={{ listStyle: "none", m: 0, p: 0 }}>
      {posts.map((post) => (
        <PostListItem key={post.node.id} {...post.node} />
      ))}
    </ul>
  );
};

export default PostList;
