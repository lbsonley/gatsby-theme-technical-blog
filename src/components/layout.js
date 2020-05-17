/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./code-block";
import Header from "./header";
import Footer from "./footer";
import BasePath from "../contexts/base-path";

import "katex/dist/katex.min.css";

const components = {
  code: CodeBlock,
};

const Layout = ({ basePath = "/blog", children }) => {
  return (
    <BasePath.Provider value={basePath}>
      <MDXProvider components={components}>
        <Flex sx={{ flexDirection: "column", minHeight: "minHeight" }}>
          <Header />
          <main sx={{ flex: "1 0 70%" }}>
            <Container>{children}</Container>
          </main>
          <Footer />
        </Flex>
      </MDXProvider>
    </BasePath.Provider>
  );
};

export default Layout;
