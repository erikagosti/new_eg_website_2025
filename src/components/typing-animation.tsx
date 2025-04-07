"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
  phrases: string[];
  typingSpeed?: number;
  delayBetweenPhrases?: number;
}

export default function TypingAnimation({
  phrases,
  typingSpeed = 65,
  delayBetweenPhrases = 4000,
}: TypingAnimationProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const currentPhrase = phrases[currentPhraseIndex];

  useEffect(() => {
    if (isTyping) {
      if (charIndex < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentPhrase[charIndex]);
          setCharIndex(charIndex + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else {
        // Finished typing current phrase
        const timeout = setTimeout(() => {
          // Move to next phrase after delay
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          setDisplayedText("");
          setCharIndex(0);
        }, delayBetweenPhrases);

        return () => clearTimeout(timeout);
      }
    }
  }, [
    charIndex,
    currentPhrase,
    currentPhraseIndex,
    delayBetweenPhrases,
    isTyping,
    phrases,
    typingSpeed,
  ]);

  return (
    <div className="font-light">
      I am {" "}
      <span className="inline-block min-w-[12ch] text-[#d4a373]">
        {displayedText}
        <span className="cursor-blink text-[#c29365]">|</span>
      </span>
    </div>
  );
}
