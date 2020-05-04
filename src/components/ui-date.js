import React from "react";

const UiDate = ({ timestamp }) => {
  const dateString = new Date(timestamp).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return <time datetime={timestamp}>{dateString}</time>;
};

export default UiDate;
