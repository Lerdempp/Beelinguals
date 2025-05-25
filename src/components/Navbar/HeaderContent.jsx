import React from "react";

const HeaderContent = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "669px",
        height: "36px",
        position: "absolute",
        top: "24px",
        right: "380px",
      }}
    >
      {/* Yeni Container */}
      <div
        style={{
          display: "flex",
          padding: "8px 12px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "transparent", // Eğer arka plan gerekirse eklenebilir
        }}
      >
        {/* Home Yazısı */}
        <p
          style={{
            color: "#000",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px", // 142.857%
            letterSpacing: "-0.084px",
          }}
        >
          Home
        </p>
      </div>
    </div>
  );
};

export default HeaderContent;
