import React from "react";
import HeaderContainer from "./Header"; // HeaderContainer'ı import ediyoruz
import Content from "./Content"; // Content'i import ediyoruz

const Blog = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "988px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
        width: "956px",
        height: "1163px",
        boxSizing: "border-box",
      }}
    >
      {/* HeaderContainer bileşenini buraya çağırıyoruz */}
      <HeaderContainer />
      {/* Content bileşenini buraya çağırıyoruz */}
      <Content />
    </div>
  );
};

export default Blog;
