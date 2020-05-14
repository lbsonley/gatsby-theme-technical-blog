/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, Link as ThemeLink, Flex } from "theme-ui";
import { FaTag, FaTags } from "react-icons/fa";

const Tag = ({ name }) => {
  return (
    <li sx={{ display: "inline-block" }}>
      <ThemeLink variant="tag" as={Link} to={`/tags/${name}`}>
        {name}
      </ThemeLink>
    </li>
  );
};

const Tags = ({ tags }) => {
  return (
    <Flex as="ul"
      sx={{
        alignItems: "center",
        listStyle: "none",
        m: 0,
        p: 0
      }}
    >
      <FaTags size={24} sx={{ mr: 4 }} />
      {tags.map((tag) => (
        <Tag key={tag} name={tag}>
          {tag}
        </Tag>
      ))}
    </Flex>
  );
};

export default Tags;
