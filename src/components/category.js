/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, Flex, Link as ThemeLink } from "theme-ui";
import { FaFolder } from "react-icons/fa";

const Category = ({ name }) => {
  const capitalize = str => (`${str.charAt(0).toUpperCase()}${str.slice(1)}`);

  return (

    <Flex
      sx={{
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        mt: 2
      }}
    >
      <FaFolder  size={24} sx={{ mr: 4 }}/>
      <p sx={{ my: 0, fontStyle: "italic" }}>
        <ThemeLink
          as={Link}
          to={`/category/${name}`}
        >
          {capitalize(name)}
        </ThemeLink>
      </p>
    </Flex>
  );
};

export default Category;
