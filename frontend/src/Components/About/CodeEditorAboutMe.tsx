import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
import type { CodeEditorLinePropI } from "./CodeEditorLineNumbers";

const CodeEditorAboutMe = ({
  codeLines,
  handleMouseLeave,
  handleMouseEnter,
  highlightedLine,
}: CodeEditorLinePropI) => {
  return (
    <div className="flex flex-col mt-4 lg:w-full">
      {codeLines.map((line) => (
        <div
          className="relative"
          key={line.number}
          onMouseEnter={() => handleMouseEnter(line.number)}
          onMouseLeave={handleMouseLeave}
        >
          <SyntaxHighlighter
            lineNumberContainerStyle={{
              scale: 1.1,
            }}
            className="
selection:bg-[#6a4c3c] selection:text-[#fdfdfd]
            "
            language="javascript"
            style={agate}
            customStyle={{
              backgroundColor: highlightedLine === line.number ? "#2D3748" : "",
              zIndex: "10",
              padding: "0",
              lineBreak: "anywhere",
            }}
          >
            {line.line}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
};

export default CodeEditorAboutMe;
