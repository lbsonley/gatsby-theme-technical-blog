/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui";
import Tags from "./tags";
import Category from "./category";

const SubTitle = ({ tag = false, category = false }) => {
  return (
    <Box sx={{ my: 6 }}>
      <Styled.h2 sx={{ fontSize: 3 }}>
        You are viewing posts {tag ? "tagged" : "categorized"}:
      </Styled.h2>
      {tag ? <Tags tags={[tag]} title={true} /> : null}
      {category ? <Category category={category} title={true} /> : null}
    </Box>
  );
};

export default SubTitle;
