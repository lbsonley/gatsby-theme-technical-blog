/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, Styled, Link as ThemeLink, Flex } from "theme-ui";
import ColorModeToggle from "./color-mode-toggle";
import BasePath from "../contexts/base-path";

const Header = () => (
  <Flex
    as="header"
    sx={{
      flex: "0 1 15%",
      variant: "layout.header",
      justifyContent: "space-between",
    }}
  >
    <Styled.h1 sx={{ fontSize: 3, m: 0 }}>
      <BasePath.Consumer>
        {(basePath) => (
          <ThemeLink as={Link} variant="title" to={basePath}>
            Technical Blog
          </ThemeLink>
        )}
      </BasePath.Consumer>
    </Styled.h1>
    <ColorModeToggle />
  </Flex>
);

export default Header;
