import React from "react";
import Header from "./Header"; // Header component'ini doğru bir şekilde import ettik
import Content from "./Content"; // Content component'ini doğru bir şekilde import ettik

const Faq = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
        height: "706px",
        top: "2247px",
        left: "242px",
        position: "absolute",
      }}
    >
      <Header /> {/* Header component'ini burada kullanıyoruz */}
      <Content /> {/* Content component'ini burada kullanıyoruz */}
    </div>
  );
};

export default Faq;
