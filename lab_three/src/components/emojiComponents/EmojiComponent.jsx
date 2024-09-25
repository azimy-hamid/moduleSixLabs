import React from "react";
import { useState } from "react";

const EmojiComponent = () => {
  const [emoji, setEmoji] = useState("😄");
  const [mood, setMood] = useState("happy");
  const handleMood = () => {
    mood === "happy" ? setMood("angry") : setMood("happy");
    mood === "happy" ? setEmoji("😡") : setEmoji("😄");
  };

  return (
    <div>
      <h1>{emoji}</h1>
      <button onClick={handleMood}>Change Mood</button>
    </div>
  );
};

export default EmojiComponent;
