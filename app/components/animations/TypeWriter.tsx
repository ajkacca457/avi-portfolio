"use client";
import { useEffect, useState } from "react";

const strings = [
  '"Full-Stack Developer & Tech Lead"',
  '"Tech Lead @ GoDoc"',
  '"Full-Stack Developer @ JJ-NET OY"',
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 30;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

export default function TypeWriter() {
  const [displayed, setDisplayed] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const current = strings[stringIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === current.length) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, PAUSE_AFTER_TYPE);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(false);
            setStringIndex((prev) => (prev + 1) % strings.length);
          }, PAUSE_AFTER_DELETE);
        }
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, stringIndex]);

  return (
    <span className="text-vsc-orange">
      {displayed}
      <span className="animate-pulse text-vsc-teal">▋</span>
    </span>
  );
}