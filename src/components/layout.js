/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui";

const Layout = ({ children }) => {
  return (
    <Flex sx={{ flexDirection: "column", minHeight: "minHeight" }}>
      <header
        sx={{
          flex: "0 1 15%",
          variant: "layout.header",
        }}
      >
        <Styled.h1 sx={{ fontSize: 3, m: 0 }}>Technical Blog</Styled.h1>
      </header>
      <main sx={{ flex: "1 0 70%" }}>{children}</main>
      <footer
        sx={{
          flex: "0 1 15%",
          variant: "layout.footer",
        }}
      >
        <Styled.p sx={{ m: 0 }}>footer content</Styled.p>
      </footer>
    </Flex>
  );
};

export default Layout;
