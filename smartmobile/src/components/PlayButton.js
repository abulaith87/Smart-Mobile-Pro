import React from "react";

const PlayButton = () => {
  const handlePlay = () => alert("تشغيل كل الميزات!");
  return <button className="play-button" onClick={handlePlay}>تشغيل الكل</button>;
};

export default PlayButton;
