/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, Flex, Styled, Container, Link as ThemeLink } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./code-block";
import Header from "./header";
import Footer from "./footer";

import "katex/dist/katex.min.css";

const components = {
  code: CodeBlock,
};

const Layout = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <Flex sx={{ flexDirection: "column", minHeight: "minHeight" }}>
        <Header />
        <main sx={{ flex: "1 0 70%" }}>
          <Container>{children}</Container>
        </main>
        <Footer />
      </Flex>
    </MDXProvider>
  );
};

export default Layout;
