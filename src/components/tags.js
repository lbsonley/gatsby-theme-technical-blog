/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, Link as ThemeLink, Flex } from "theme-ui";
import { FaTag, FaTags, FaTimes } from "react-icons/fa";

const Tag = ({ name, title = false }) => {
  return (
    <li sx={{ display: "inline-block" }}>
      <ThemeLink
        variant="tag"
        as={Link}
        to={title ? "/blog" : `/tags/${name}`}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {name}
        {title ? <FaTimes sx={{ ml: 2 }} /> : null}
      </ThemeLink>
    </li>
  );
};

const Tags = ({ tags, title }) => {
  return (
    <Flex
      as="ul"
      sx={{
        alignItems: "center",
        listStyle: "none",
        m: 0,
        p: 0,
        ml: () => `${title ? 2 : 0}`,
      }}
    >
      <FaTags size={24} sx={{ mr: 4 }} />
      {tags.map((tag) => (
        <Tag key={tag} name={tag} title={title}>
          {tag}
        </Tag>
      ))}
    </Flex>
  );
};

export default Tags;
