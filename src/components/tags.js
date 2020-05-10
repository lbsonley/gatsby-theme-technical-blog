/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, Link as ThemeLink } from "theme-ui";

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
    <ul sx={{ listStyle: "none", mx: 0, my: 5, p: 0 }}>
      {tags.map((tag) => (
        <Tag key={tag} name={tag}>
          {tag}
        </Tag>
      ))}
    </ul>
  );
};

export default Tags;
