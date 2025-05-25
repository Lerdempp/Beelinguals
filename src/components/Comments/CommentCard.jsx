import React from "react";
import star from "../../assets/icons/fav.svg";
import star2 from "../../assets/icons/fav2.svg";

const CommentCard = ({ name, email, subject, comment, rating }) => {
  return (
    <div
      style={{
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        width: "335px",
        padding: "16px",
        border: "1px solid #E5E7EB",
        borderRadius: "16px",
        backgroundColor: "#FFF",
        boxSizing: "border-box",
        userSelect: "none", // Yazıların seçimini engeller
        cursor: "default", // Normal fare imleci
      }}
    >
      {/* Rating Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          boxSizing: "border-box",
          width: "168px",
          height: "24px",
        }}
      >
        {/* Rating Yıldızları */}
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={index < rating ? star2 : star} // Rating'e göre yıldız simgesi
            alt="Rating Star"
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        ))}
      </div>

      {/* Yorum Konusu ve İçeriği */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
          alignSelf: "stretch",
          width: "303px",
          height: "92px",
        }}
      >
        <span
          style={{
            color: "#000",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "24px",
            letterSpacing: "-0.176px",
          }}
        >
          {subject} {/* Dinamik Subject */}
        </span>
        <span
          style={{
            color: "#6B7280",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "-0.084px",
          }}
        >
          {comment} {/* Dinamik Comment */}
        </span>
      </div>

      {/* Kullanıcı Adı ve Email */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          width: "144px",
          height: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "144px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "4px",
          }}
        >
          <span
            style={{
              color: "#000",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "20px",
              letterSpacing: "-0.084px",
            }}
          >
            {name} {/* Dinamik Name */}
          </span>
          <span
            style={{
              color: "#6B7280",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16px",
              letterSpacing: "-0.084px",
            }}
          >
            {email} {/* Dinamik Email */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
