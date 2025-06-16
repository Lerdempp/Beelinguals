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
        width: "1152px",
        margin: "0 auto",
        paddingTop: 60,
        paddingBottom: 60,
        boxSizing: "border-box",
      }}
    >
      <Header /> {/* Header component'ini burada kullanıyoruz */}
      <Content /> {/* Content component'ini burada kullanıyoruz */}
    </div>
  );
};

export default Faq;
