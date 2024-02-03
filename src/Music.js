// BackgroundMusic.js
import React, { useEffect } from "react";

const Music = () => {
  useEffect(() => {
    const audio = new Audio(process.env.PUBLIC_URL + "/bg.mp3");
    audio.play();
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return null; // No need to render anything for the background music component
};

export default Music;
