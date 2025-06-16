import React from "react";
import { useNavigate } from "react-router-dom";

const BlogRow = ({ blogId = 1, title, description, image, readTime }) => {
  const navigate = useNavigate();

  // Yönlendirme fonksiyonu
  const handleImageClick = () => {
    navigate(`/blog-details/${blogId}`); // Blog ID'si ile yönlendirme
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignSelf: "stretch",
        padding: "0px 12px 12px 12px",
        borderRadius: "20px",
        border: "1.5px solid var(--gray-100, #F3F4F6)",
        background: "var(--gray-50, #F9FAFB)",
        cursor: "pointer",
      }}
      onClick={handleImageClick}
    >
      {/* Text Area */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "20px 16px",
          borderRadius: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* Information Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            alignSelf: "stretch",
            padding: "14px 12px",
            boxSizing: "border-box",
          }}
        >
          {/* SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#EA580C" />
          </svg>

          {/* Information Text */}
          <span
            style={{
              color: "var(--gray-500, #6B7280)",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "22px",
            }}
          >
            {readTime}
          </span>
        </div>
        {/* Text Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
            padding: "16px 12px",
            boxSizing: "border-box",
          }}
        >
          {/* Başlık */}
          <span
            style={{
              alignSelf: "stretch",
              color: "#000",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
              letterSpacing: "-0.176px",
            }}
          >
            {title}
          </span>

          {/* Açıklama */}
          <span
            style={{
              alignSelf: "stretch",
              color: "var(--gray-500, #6B7280)",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "-0.084px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minHeight: "52px",
            }}
          >
            {description}
          </span>
        </div>
      </div>
      {/* Image Area Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          width: "100%",
          height: "220px",
          padding: "6px",
          borderRadius: "18px",
          border: "4px solid #FFF",
          background: "#FFF",
          boxShadow:
            "0px 35px 10px 0px rgba(160, 166, 172, 0.00), 0px 23px 9px 0px rgba(160, 166, 172, 0.01), 0px 13px 8px 0px rgba(160, 166, 172, 0.03), 0px 6px 6px 0px rgba(160, 166, 172, 0.06), 0px 1px 3px 0px rgba(160, 166, 172, 0.06)",
          boxSizing: "border-box",
          marginTop: "auto",
        }}
      >
        {/* Resim */}
        <img
          src={image}
          alt="Blog görseli"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
      </div>
    </div>
  );
};

export default BlogRow;
