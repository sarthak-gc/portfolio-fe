import { useCallback, useEffect, useState } from "react";
import Name from "../Components/Landing/Intro/Name";
import Tagline from "../Components/Landing/Intro/Tagline";
import Photo from "../Components/Landing/Intro/Photo";
import Quote from "../Components/Landing/Intro/Quote";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const phrases = ["BUILDING", "IMPROVING", "LEARNING"];

const Landing = () => {
  const [likeTo, setLikeTo] = useState<string>("");
  const [targetString, setTargetString] = useState<string>("LEARNING");
  const [iterations, setIterations] = useState<number>(0);

  const [phraseIndex, setPhraseIndex] = useState(0);

  const randomizeString = useCallback((length: number) => {
    return Array.from({ length })
      .map(() => letters[Math.floor(Math.random() * 26)])
      .join("");
  }, []);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(true);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  useEffect(() => {
    const length = targetString.length;
    let intervalId: NodeJS.Timeout;

    const startRandomizing = () => {
      intervalId = setInterval(() => {
        if (iterations < length) {
          const randomPart = randomizeString(length - iterations);
          const newText = targetString.slice(0, iterations) + randomPart;
          setLikeTo(newText);
        } else {
          setLikeTo(targetString);
          setTimeout(() => {
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            setTargetString(phrases[phraseIndex]);
            setIterations(0);
          }, 1800);
        }
        setIterations((prev) => prev + 1);
      }, 70);
    };

    if (iterations <= length) {
      startRandomizing();
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [iterations, targetString, phraseIndex, randomizeString]);

  return (
    <div
      className="h-screen bg-black  w-full text-white selection:bg-white selection:text-black font-roboto grid grid-cols-7 
    grid-rows-15 gap-0 "
    >
      <Name name={"Sarthak GC"} />

      <Tagline likeTo={likeTo} />
      <Photo />
      <Quote scrolled={scrolled} />
    </div>
  );
};

export default Landing;
