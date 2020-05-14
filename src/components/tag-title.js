/** @jsx jsx */
import React from "react";
import { jsx, Styled, Box } from "theme-ui";
import Tags from "./tags";

const TagTitle = ({ tag }) => {
  return (
    <Box sx={{ my: 6 }}>
      <Styled.h2 sx={{ fontSize: 3 }}>
        You are viewing posts tagged:
      </Styled.h2>
      <Tags tags={[tag]} title={true} />
    </Box>
  )
};

export default TagTitle;