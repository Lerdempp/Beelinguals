import React from "react";
import HeaderContainer from "./Header"; // HeaderContainer'ı import ediyoruz
import Content from "./Content"; // Content'i import ediyoruz

const Blog = () => {
  return (
    <div
      id="blog-section"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
        width: "1152px",
        margin: "0 auto",
        paddingTop: 60,
        paddingBottom: 60,
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
