import React, { useState } from "react";

const Content = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqItems = [
    {
      question: "What is this website about?",
      answer:
        "Our platform provides interactive worksheets and educational resources for translation training. Users can practice vocabulary, grammar, and translation skills through engaging and dynamic materials.",
    },
    {
      question: "Who can use this platform?",
      answer:
        "The platform is designed for students, educators, and professionals in translation and language studies. Whether you are a beginner or advanced learner, you will find valuable resources here.",
    },
    {
      question: "Can I request a specific type of worksheet?",
      answer:
        'Yes! We value user feedback. You can submit worksheet requests through our "Contact Us" page.',
    },
    {
      question: "Can I contribute worksheets to the platform?",
      answer:
        "At the moment, only our team uploads worksheets. However, we are exploring options for user contributions in the future.",
    },
  ];

  const toggleContainer = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      if (openIndexes.length < 2) {
        setOpenIndexes([...openIndexes, index]);
      } else {
        setOpenIndexes([...openIndexes.slice(1), index]);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "766px",
        padding: "24px",
        gap: "16px",
        borderRadius: "16px",
        border: "1px solid var(--gray-200, #E5E7EB)",
      }}
    >
      {faqItems.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div key={index}>
            {/* Soru Kısmı */}
            <div
              onClick={() => toggleContainer(index)}
              style={{
                display: "flex",
                padding: "20px",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--gray-900, #111827)",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "24px",
                  letterSpacing: "-0.176px",
                }}
              >
                {item.question}
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                }}
              >
                <rect width="24" height="24" rx="12" fill="#F9FAFB" />
                <path
                  d="M12 7.83337V12M12 12V16.1667M12 12H7.83334M12 12H16.1667"
                  stroke={isOpen ? "#F97316" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    transition: "stroke 0.5s ease",
                  }}
                />
              </svg>
            </div>

            {/* İçerik Kısmı */}
            <div
              style={{
                maxHeight: isOpen ? "200px" : "0px",
                opacity: isOpen ? 1 : 0,
                overflow: "hidden",
                transition: isOpen
                  ? "max-height 0.5s ease, opacity 0.5s ease"
                  : "max-height 0.3s ease, opacity 0.3s ease", // Açılma ve kapanma hızları
              }}
            >
              <div
                style={{
                  padding: "20px",
                  color: "var(--gray-500, #6B7280)",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                {item.answer}
              </div>
            </div>

            {/* Çizgi */}
            <div
              style={{
                height: "1px",
                background: "var(--gray-200, #E5E7EB)",
                marginTop: isOpen ? "20px" : "0px",
                transition: isOpen
                  ? "margin-top 0.5s ease"
                  : "margin-top 0.3s ease", // Açılma ve kapanma hızları
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
