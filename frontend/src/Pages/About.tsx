import { useScrollStore } from "../Store/Refs/useRefToScroll";
import CodeEditorAboutMe from "@/Components/About/CodeEditorAboutMe";
import CodeEditorLineNumbers from "@/Components/About/CodeEditorLineNumbers";
import { useState } from "react";

const About = () => {
  const aboutRef = useScrollStore().sectionRefs.about;

  const [highlightedLine, setHighlightedLine] = useState(-1);

  const handleMouseEnter = (lineNumber: number) => {
    setHighlightedLine(lineNumber);
  };

  const handleMouseLeave = () => {
    setHighlightedLine(-1);
  };

  const codeLines = [
    { line: ` class SarthakGC {`, number: 1 },
    { line: `   constructor() {`, number: 2 },
    {
      line: `     // Constantly changing but the change is slow.`,
      number: 3,
    },
    { line: `     this.name = "Sarthak GC";`, number: 4 },
    { line: `     this.dayOfBirthTimestamp = 1078617600;`, number: 5 },
    { line: `     this.email = 'sarthakgc.np@gmail.com';`, number: 6 },
    { line: `   }`, number: 7 },
    { line: `   workExperience() {`, number: 8 },
    { line: `     return [];`, number: 9 },
    { line: `   }`, number: 10 },
    { line: `   education() {`, number: 11 },
    { line: `     return [`, number: 12 },
    {
      line: `       { '2023-Present': 'Patan Multiple Campus, Patandhoka-Lalitpur -  Bachelor of Computer Application (BCA)' },`,
      number: 13,
    },
    {
      line: `       { '2020-2022': 'Everest English Boarding Higher Secondary School, Butwal-Rupandehi - High School' },`,
      number: 14,
    },
    {
      line: `       { '2012-2020': 'Everest English Boarding Higher Secondary School, Butwal-Rupandehi - Grade 3 to 10' }`,
      number: 15,
    },
    { line: `     ];`, number: 16 },
    { line: `   }`, number: 17 },
    { line: `   skills() {`, number: 18 },
    { line: `     return [`, number: 19 },
    {
      line: `       'HTML/CSS/JS', 'TypeScript', 'React', 'Node.js', 'Express.js', 'Tailwind', 'Zustand', 'Axios', 'Git/Github', `,
      number: 20,
    },
    {
      line: `       'MongoDB', 'Prisma', 'REST APIs', 'JWT', 'Hono', 'Web Sockets', 'Redis', 'Docker', 'Zod'`,
      number: 21,
    },

    { line: `     ]`, number: 22 },
    { line: `   }`, number: 23 },
    { line: ` }`, number: 24 },
  ];

  return (
    <div ref={aboutRef} className="bg-[#131513] md:pl-40 overflow-scroll">
      <div className="flex space-x-0 lg:w-full">
        <CodeEditorLineNumbers
          codeLines={codeLines}
          highlightedLine={highlightedLine}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />

        <CodeEditorAboutMe
          codeLines={codeLines}
          highlightedLine={highlightedLine}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default About;
