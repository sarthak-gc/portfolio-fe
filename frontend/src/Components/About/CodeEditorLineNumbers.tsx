export interface codeLineI {
  line: string;
  number: number;
}
export interface CodeEditorLinePropI {
  codeLines: codeLineI[];
  highlightedLine: number;
  handleMouseEnter: (val: number) => void;
  handleMouseLeave: () => void;
}

const CodeEditorLineNumbers = ({
  codeLines,
  highlightedLine,
  handleMouseEnter,
  handleMouseLeave,
}: CodeEditorLinePropI) => {
  return (
    <div className="flex flex-col mt-4  just-center select-none  border-r-2 ">
      {codeLines.map((line) => (
        <div
          key={line.number}
          className={`text-gray-400 w-12 ${
            highlightedLine === line.number
              ? "text-yellow-400 bg-[#2D3748]"
              : ""
          } flex items-center justify-center`}
          onMouseEnter={() => handleMouseEnter(line.number)}
          onMouseLeave={handleMouseLeave}
        >
          {highlightedLine === line.number || highlightedLine === -1 ? (
            <span>{line.number}</span>
          ) : (
            <span className="">{Math.abs(highlightedLine - line.number)}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CodeEditorLineNumbers;
