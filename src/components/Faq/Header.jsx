import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px",
        alignSelf: "stretch",
        width: "956px",
        height: "154px",
      }}
    >
      {/* Badge Container (Header'ın Child'ı) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          alignSelf: "stretch",
          width: "956px",
          height: "26px",
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
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "20px",
              letterSpacing: "-0.084px",
            }}
          >
            F.A.Q
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

      {/* Title & Action Container (2nd Child) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          alignSelf: "stretch",
          width: "956px",
          height: "116px",
        }}
      >
        {/* Title Container (İlk Child) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            alignSelf: "stretch",
            width: "956px",
            height: "60px",
          }}
        >
          <span
            style={{
              alignSelf: "stretch",
              color: "#000",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "500",
              lineHeight: "32px", // 133.333%
            }}
          >
            Questions & Answers
          </span>

          <span
            style={{
              alignSelf: "stretch",
              color: "var(--gray-500, #6B7280)",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px", // 142.857%
              letterSpacing: "-0.084px",
            }}
          >
            All plans come with a 14-day free trial period
          </span>
        </div>
      </div>

      {/* Tab Menu Container (2nd Child) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Yatayda tam ortalama
          alignItems: "center", // Dikeyde ortalama
          gap: "12px",
          width: "956px", // Ebeveyn container'ı ile hizalama
          height: "32px", // Yükseklik 32px
        }}
      >
        {/* Tab Menu içeriği burada yer alacak */}
        <div
          style={{
            display: "flex",
            padding: "6px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
            borderRadius: "87px",
            backgroundColor: "#F3F4F6", // Background color
          }}
        >
          <span
            style={{
              color: "#000",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
            }}
          >
            General
          </span>
        </div>
        <div
          style={{
            display: "flex",
            padding: "6px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
            borderRadius: "87px",
            backgroundColor: "#F3F4F6", // Background color
          }}
        >
          <span
            style={{
              color: "#000",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
            }}
          >
            Subscription
          </span>
        </div>
        <div
          style={{
            display: "flex",
            padding: "6px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
            borderRadius: "87px",
            backgroundColor: "#F3F4F6", // Background color
          }}
        >
          <span
            style={{
              color: "#000",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
            }}
          >
            Services
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
