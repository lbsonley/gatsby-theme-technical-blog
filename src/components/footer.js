/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Footer = () => (
  <footer
    sx={{
      flex: "0 1 15%",
      variant: "layout.footer",
      textAlign: "center",
    }}
  >
    <Styled.p sx={{ m: 0 }}>&copy; Gatsby Theme Technical Blog</Styled.p>
  </footer>
);

export default Footer;
