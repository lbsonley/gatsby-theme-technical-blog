/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, Styled, Link as ThemeLink } from "theme-ui";

const Header = () => (
  <header
    sx={{
      flex: "0 1 15%",
      variant: "layout.header",
    }}
  >
    <Styled.h1 sx={{ fontSize: 3, m: 0 }}>
      <ThemeLink as={Link} variant="title" to="/blog">
        Technical Blog
      </ThemeLink>
    </Styled.h1>
  </header>
);

export default Header;
