/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <Flex sx={{ flexDirection: "column", minHeight: "minHeight" }}>
      <Header />
      <main sx={{ flex: "1 0 70%" }}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </Flex>
  );
};

export default Layout;
