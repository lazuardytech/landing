"use client";

import Doto from "@/lib/fonts/doto";
import { useEffect, useState } from "react";

export default function AnimatedBox({
  character = ".",
  randomCharacter = "*",
}) {
  const [charactersArray, setCharactersArray] = useState(
    Array(16).fill(character),
  );
  const [originalIndex, setOriginalIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (originalIndex !== null) {
        charactersArray[originalIndex] = character;
      }

      const randomIndex = Math.floor(Math.random() * charactersArray.length);
      charactersArray[randomIndex] = randomCharacter;
      setCharactersArray([...charactersArray]);
      setOriginalIndex(randomIndex);
    }, 1000);

    return () => clearInterval(interval);
  }, [charactersArray, originalIndex, character, randomCharacter]);

  return (
    <div className="hidden md:flex flex-col w-full">
      <AnimatedBoxRow>{charactersArray.slice(0, 4).join(" ")}</AnimatedBoxRow>
      <AnimatedBoxRow>{charactersArray.slice(4, 8).join(" ")}</AnimatedBoxRow>
      <AnimatedBoxRow>{charactersArray.slice(8, 12).join(" ")}</AnimatedBoxRow>
      <AnimatedBoxRow>{charactersArray.slice(12, 16).join(" ")}</AnimatedBoxRow>
    </div>
  );
}

export function AnimatedBoxRow({ children }) {
  return (
    <p
      className={`w-full font-bold text-black text-left text-6xl leading-none uppercase ${Doto.className}`}
    >
      {children}
    </p>
  );
}
