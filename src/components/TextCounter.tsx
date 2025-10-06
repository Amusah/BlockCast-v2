import React, { useState } from "react";

const TextCounter = ({ text }) => {
  // const [text, setText] = useState("");
  const maxLength = 200; // Optional: Set a maximum character limit
  const characterExceeded = maxLength && text.length > maxLength;

  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };

  const characterCount = text.length;
  const charactersRemaining = maxLength - characterCount;

  return (
    <div className="text-muted-foreground text-xs">
      <p className={`${characterExceeded ? "text-red-500" : ""}`}>
        Characters: {characterCount}
        {maxLength && ` / ${maxLength}`}
        {maxLength && ` (${charactersRemaining} remaining)`}
      </p>
    </div>
  );
};

export default TextCounter;
