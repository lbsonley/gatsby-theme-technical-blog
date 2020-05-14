/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, Flex, Link as ThemeLink } from "theme-ui";
import { FaFolder, FaTimes } from "react-icons/fa";

const Category = ({ category, title }) => {
  const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

  return (
    <Flex
      sx={{
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        mt: 2,
        ml: () => `${title ? 2 : 0}`
      }}
    >
      <FaFolder size={24} sx={{ mr: 4 }} />
      <p sx={{ my: 0, fontStyle: "italic" }}>
        <ThemeLink
          as={Link}
          to={title ? "/blog" : `/category/${category}`}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {capitalize(category)}
          {title ? <FaTimes sx={{ marginLeft: 2 }} /> : null }
        </ThemeLink>
      </p>
    </Flex>
  );
};

export default Category;
