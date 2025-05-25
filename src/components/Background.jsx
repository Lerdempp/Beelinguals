import React from "react";

const Background = ({ children }) => {
  return (
    <div
      style={{
        width: "1440px",
        height:"auto",
        margin: "0 auto",
        boxSizing: "border-box",
        position: "relative", // Footer'ın düzgün konumlanması için
      }}
    >
      {children}
    </div>
  );
};

export default Background;
