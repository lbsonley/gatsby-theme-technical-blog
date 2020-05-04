/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./code-block";

const components = {
  code: CodeBlock,
};

const Layout = ({ children }) => {
  return (
    <MDXProvider components={components}>
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
    </MDXProvider>
  );
};

export default Layout;
