import React from "react";

const PostLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Gatsby Theme Technical Blog MDX</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>footer content</p>
      </footer>
    </>
  )
};

export default PostLayout;
