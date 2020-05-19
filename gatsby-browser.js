const React = require("react");
const { MDXProvider } = require("@mdx-js/react");
const CodeBlock = require("./src/components/code-block").default;
const BasePath = require("./src/contexts/base-path").default;

const components = {
  code: CodeBlock,
};

exports.wrapRootElement = ({ element }, { basePath }) => {
  return (
    <BasePath.Provider value={basePath}>
      <MDXProvider components={components}>
        {element}
      </MDXProvider>
    </BasePath.Provider>
  )
};
