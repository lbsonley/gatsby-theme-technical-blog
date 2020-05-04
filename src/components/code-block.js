/** @jsx jsx */
import { jsx } from "theme-ui";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";


const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : "";
  return (
    <Highlight
     {...defaultProps}
     code={children}
     language={language}
     theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style} sx={{ p: 5 }}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
