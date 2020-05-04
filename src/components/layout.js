/** @jsx jsx */
import React from "react";
import { jsx, Flex, Heading, Text } from "theme-ui";

const Layout = ({ children }) => {
  return (
    <Flex sx={{ flexDirection: "column", minHeight: "minHeight" }}>
      <header
        sx={{
          flex: "0 1 15%",
          p: 6,
          mb: 6,
          variant: "layout.header"
        }}
      >
        <Heading variant="h3" as="h1">Technical Blog</Heading>
      </header>
      <main sx={{ flex: "1 0 70%" }}>
        {children}
      </main>
      <footer
        sx={{
          flex: "0 1 15%",
          p: 6,
          mt: 6,
          variant: "layout.footer"
        }}
      >
        <Text as="p">footer content</Text>
      </footer>
    </Flex>
  )
};

export default Layout;
