import React from "react";

const HeaderContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Üste yapışması için
        alignItems: "center", // Ortada hizalama
        width: "100%", // Tam genişlik
        boxSizing: "border-box",
        margin: "0", // Varsayılan boşlukları kaldırmak için
        gap:"12px"
      }}
    >
      {/* BadgeContainer */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
          width: "956px",
          height: "26px",
          marginTop: "0", // Üste sıfırdan başlaması için
        }}
      >
        {/* Gradient Line (İlk) */}
        <div
          style={{
            width: "416px",
            height: "1px",
            background: "linear-gradient(90deg, rgba(229, 231, 235, 0.00) 0%, #E5E7EB 100%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            padding: "3px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            width: "36px",
            height: "20px",
            borderRadius: "54px",
            border: "1px solid var(--gray-200, #E5E7EB)",
            background: "#FFF",
            boxShadow:
              "0px 1px 4px 0px rgba(230, 230, 230, 0.12) inset, 0px -2px 2.5px 0px rgba(230, 230, 230, 0.32) inset",
          }}
        >
          <span
            style={{
              color: "var(--gray-700, #374151)",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
              letterSpacing: "-0.084px",
            }}
          >
            Blog
          </span>
        </div>

        {/* Gradient Line (Ters) */}
        <div
          style={{
            width: "416px",
            height: "1px",
            background: "linear-gradient(90deg, #E5E7EB 0%, rgba(229, 231, 235, 0.00) 100%)",
          }}
        />
      </div>

      {/* Title Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          width: "956px",
          marginTop: "16px", // Badge ile küçük bir boşluk bırakmak için
        }}
      >
        <span
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "500",
            lineHeight: "32px",
          }}
        >
          Latest Blog and Article
        </span>

        <span
          style={{
            color: "var(--gray-500, #6B7280)",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "-0.084px",
          }}
        >
          Lorem impsum dolor sit amet
        </span>
      </div>
    </div>
  );
};

export default HeaderContainer;
